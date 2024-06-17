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

    return (
        <div className="movie-app">
            <SearchMovie onSearchChange={handleSearchChange} />
            {movieDetails && <MovieDetails data={movieDetails} />}
        </div>
    );
};

export default MovieApp;
