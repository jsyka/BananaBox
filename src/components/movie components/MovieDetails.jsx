import React from "react";
import "./MovieDetails.css";

const MovieDetails = ({ data, addMovieToList }) => {

    const handleAddMovieToList = () => {
        addMovieToList(data.title);
    };

    return (
        <div className="movie-details">
            <h2 className="movie-title">{data.title}</h2>
            <img
                className="poster"
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data.title}
            />
            <div className="info">
                <p>{data.overview}</p>
                <p>Release Date: {data.release_date}</p>
                <p>Rating: {data.vote_average}</p>
                <p>Genres: {data.genres.map((genre) => genre.name).join(", ")}</p>
            </div>
            <div className="actions">
                <button className="actionbutton" onClick={handleAddMovieToList}>Add to list</button>
                <button className="actionbutton">Watched</button>
                <button className="actionbutton">Rate</button>
            </div>
        </div>
    );
};

export default MovieDetails;
