import React, { useEffect, useState } from "react";
import './PinsMovieList.css';

const PinsList = ({ onPinSelect }) => {
  const [movieList, setMovieList] = useState([]);
  const [detailedMovieList, setDetailedMovieList] = useState([]);
  const [selectedMovie2pin, setSelectedMovie2pin] = useState(null);

  useEffect(() => {
    const savedList = localStorage.getItem("movieList");
    if (savedList) {
      setMovieList(JSON.parse(savedList));
    }
  }, []);

  useEffect(() => {
    const fetchMovieDetails = async (movieName) => {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d46a33fcafb20ba29d5ff621ff96ac5d&query=${movieName}`);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        return data.results[0];  // Return the first search result
      }
      return null;
    };

    const loadDetailedMovies = async () => {
      const detailedMovies = await Promise.all(
        movieList.map(async (movieName) => {
          const details = await fetchMovieDetails(movieName);
          return { name: movieName, details };
        })
      );
      setDetailedMovieList(detailedMovies.filter(movie => movie.details !== null));
    };

    if (movieList.length > 0) {
      loadDetailedMovies();
    }
  }, [movieList]);

  const handlePinSelect = (selectedMovie) => {
    setSelectedMovie2pin(selectedMovie);
    console.log("Selected movie to pin:", selectedMovie);
  }

  const savePin = () => {
    if (selectedMovie2pin) {
      localStorage.setItem("pinned", JSON.stringify(selectedMovie2pin));
      console.log("Saved pin:", selectedMovie2pin);
      onPinSelect(selectedMovie2pin); // Inform parent component about the pinned movie
    }
  }

  return (
    <div className="pins-editing-window">
      <ul className="p-e-container">
        {detailedMovieList.map((movie, index) => (
          <li key={index}>
            {movie.details && (
              <>
                <img
                  onClick={() => handlePinSelect(movie)}
                  src={`https://image.tmdb.org/t/p/w500${movie.details.poster_path}`}
                  className={selectedMovie2pin === movie ? "poster-selected" : "list-poster2"}
                  alt={movie.details.title}
                />
              </>
            )}
          </li>
        ))}
      </ul>
      <button className="edit-p" onClick={savePin}>
        Save
      </button>
    </div>
  );
};

export default PinsList;
