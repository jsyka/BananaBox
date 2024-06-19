import React, { useState, useEffect } from "react";
import SearchMovie from "./SearchMovie";
import MovieDetails from "./MovieDetails";
import './MovieApp.css'

const MovieApp = () => {
    const [movieDetails, setMovieDetails] = useState(null);

    const handleSearchChange = async (selectedOption) => {
        if (selectedOption) {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${selectedOption.value}?api_key=d46a33fcafb20ba29d5ff621ff96ac5d`);
            const data = await response.json();
            setMovieDetails(data);
        }
    };

    const [movieList, setMovieList] = useState([]);
    
    const addMovieToList = (movieName) => {
        if (!movieList.includes(movieName)){
            setMovieList([...movieList, movieName]);
            console.log("Updated list:", movieList);
        }
        else {
            console.log("Already in list,:", movieList);
        }
    };

    return (
        <div className="movie-app">
            <SearchMovie onSearchChange={handleSearchChange} />
            {movieDetails && <MovieDetails data={movieDetails} addMovieToList={addMovieToList} />}
            {console.log(movieList)}
            <p>{movieList}</p>
        </div>
    );
};

export default MovieApp;
