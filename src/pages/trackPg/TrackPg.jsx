import React, { useState, useEffect } from 'react';

const TrackPg = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const savedList = localStorage.getItem("movieList");
    if (savedList) {
      setMovieList(JSON.parse(savedList));
    }
  }, []);

  const numberOfMovies = movieList.length;

  return (
    <div>
      <h1>Number of movies: {numberOfMovies}</h1>
    </div>
  )
}

export default TrackPg;
