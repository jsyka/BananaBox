import React, { useState, useEffect } from "react";
import SearchMovie from "./SearchMovie";
import MovieDetails from "./MovieDetails";
import './MovieApp.css';

const MovieApp = () => {
  const savedMovieList = localStorage.getItem('movieList');
  const [movieList, setMovieList] = useState(savedMovieList ? JSON.parse(savedMovieList) : []);
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    console.log("Initial movie list:", movieList);
  }, []); // Logs only once after the initial render

  const handleSearchChange = async (selectedOption) => {
    if (selectedOption) {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${selectedOption.value}?api_key=d46a33fcafb20ba29d5ff621ff96ac5d`);
      const data = await response.json();
      setMovieDetails(data);
      console.log("Fetched movie details:", data);
    }
  };

  const addMovieToList = (movieName) => {
    if (!movieList.includes(movieName)) {
      const newList = [...movieList, movieName];
      setMovieList(newList);
      localStorage.setItem('movieList', JSON.stringify(newList)); // Save to local storage
      console.log("Updated list:", newList); // Log the updated list
    } else {
      console.log("Already in list:", movieName); // Log if the movie is already in the list
    }
  };

  useEffect(() => {
    console.log("Updated movie list:", movieList);
  }, [movieList]); // Logs whenever movieList changes

  return (
    <div className="movie-app">
      <SearchMovie onSearchChange={handleSearchChange} />
      {movieDetails && <MovieDetails data={movieDetails} addMovieToList={addMovieToList} />}
    </div>
  );
};

export default MovieApp;
