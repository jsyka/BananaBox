import React, { useState, useEffect } from "react";
import SearchMovie from "./SearchMovie";
import MovieDetails from "./MovieDetails";
import './MovieApp.css'

const MovieApp = () => {

    const savedMovieList = localStorage.getItem('movieList');
    const [movieList, setMovieList] = useState(savedMovieList ? JSON.parse(savedMovieList) : []);

    const [movieDetails, setMovieDetails] = useState(null);

    const handleSearchChange = async (selectedOption) => {
        if (selectedOption) {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${selectedOption.value}?api_key=d46a33fcafb20ba29d5ff621ff96ac5d`);
            const data = await response.json();
            setMovieDetails(data);
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

    return (
        <div className="movie-app">
            <SearchMovie onSearchChange={handleSearchChange} />
            {movieDetails && <MovieDetails data={movieDetails} addMovieToList={addMovieToList} />}
            {console.log(movieList)}
            {/* <p>{movieList}</p> */}
        </div>
    );
};

export default MovieApp;
