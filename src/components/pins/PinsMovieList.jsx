import React, { useEffect, useState } from "react";
import './PinsMovieList.css';

const PinsList = ({ onPinSelect }) => {
  const [movieList, setMovieList] = useState([]);
  const [detailedMovieList, setDetailedMovieList] = useState([]);
  const [selectedMovies2pin, setSelectedMovies2pin] = useState([]);

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
    setSelectedMovies2pin(prevSelectedMovies => {
      if (prevSelectedMovies.includes(selectedMovie)) {
        // Deselect the movie if it's already selected
        return prevSelectedMovies.filter(movie => movie !== selectedMovie);
      } else if (prevSelectedMovies.length < 2) {
        // Select the movie if less than 2 movies are selected
        return [...prevSelectedMovies, selectedMovie];
      } else {
        // Replace the first selected movie if already 2 are selected
        return [prevSelectedMovies[1], selectedMovie];
      }
    });
    console.log("Selected movies to pin:", selectedMovies2pin);
  }

  const savePin = () => {
    if (selectedMovies2pin.length > 0) {
      localStorage.setItem("pinned", JSON.stringify(selectedMovies2pin));
      console.log("Saved pins:", selectedMovies2pin);
      onPinSelect(selectedMovies2pin); // Inform parent component about the pinned movies
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
                  className={selectedMovies2pin.includes(movie) ? "poster-selected" : "list-poster2"}
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
