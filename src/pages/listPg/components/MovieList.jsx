import React, { useEffect, useState } from "react";
import "./MovieList.css";
import star from '../../../assets/star.png'
import starnull from '../../../assets/star-null.png'
import banana from '../../../assets/bananatrue.png';
import banananull from '../../../assets/banananull.png'



const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [detailedMovieList, setDetailedMovieList] = useState([]);

  const getMovieRating = (movieId) => {
    const savedRating = localStorage.getItem(`rating-${movieId}`);
    return savedRating ? parseInt(savedRating) : 0;
  };

  useEffect(() => {
    const savedList = localStorage.getItem("movieList");
    if (savedList) {
      setMovieList(JSON.parse(savedList));
    }
  }, []);

  useEffect(() => {
    const fetchMovieDetails = async (movieName) => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=d46a33fcafb20ba29d5ff621ff96ac5d&query=${movieName}`
      );
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        return data.results[0]; // Return the first search result
      }
      return null;
    };

    const loadDetailedMovies = async () => {
      const detailedMovies = await Promise.all(
        movieList.map(async (movieName) => {
          const details = await fetchMovieDetails(movieName);
          if (details) {
            const rating = getMovieRating(details.id);
            return { name: movieName, details, rating };
          }
          return null;
        })
      );
      setDetailedMovieList(
        detailedMovies.filter((movie) => movie.details !== null)
      );
    };

    if (movieList.length > 0) {
      loadDetailedMovies();
    }
  }, [movieList]);

  return (
    <div className="movie-page">
      <h3 className="list-heading">movies I've watched:</h3>
      <ul className="movie-container">
        {detailedMovieList.map((movie, index) => (
          <li key={index} className="movie-item">
            <h4 className="list-movie-title">{movie.name}</h4>
            {movie.details && (
              <>
                <img
                  className="list-poster"
                  src={`https://image.tmdb.org/t/p/w500${movie.details.poster_path}`}
                  alt={movie.details.title}
                />
              
                  <div className="movielistrating">
                    <img src={movie.rating>=1? banana: banananull}/>
                    <img src={movie.rating>=2? banana: banananull}/>
                    <img src={movie.rating>=3? banana: banananull}/>
                    <img src={movie.rating>=4? banana: banananull}/>
                    <img src={movie.rating>=5? banana: banananull}/>
                  </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
