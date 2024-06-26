import React from "react";
import "./MovieDetails.css";
import { useState } from "react";

const MovieDetails = ({ data, addMovieToList }) => {

    const [addListStatus, setAddListStatus] = useState(true);

    const handleAddMovieToList = () => {
        addMovieToList(data.title);
        setAddListStatus(!addListStatus);
    };

    return (
        <div className="movie-details">
            <h2 className="movie-title">{data.title}</h2>
            <img
                className="poster"
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data.title}
            />
            {console.log(data)}
            <div className="info">
                <p>{data.overview}</p>
                <p>Release Date: {data.release_date}</p>
                <p>Rating: {data.vote_average}</p>
                <p>Genres: {data.genres.map((genre) => genre.name).join(", ")}</p>
                <p>Runtime: {data.runtime} mins</p>
            </div>
            <div className="actions">
                {addListStatus?
                <button className="actionbutton"onClick={handleAddMovieToList}>bookmark</button>
            : <button className="added2list" onClick={handleAddMovieToList}>Added!</button>}
                <button className="actionbutton">Watched</button>
                <button className="actionbutton">Rate</button>
            </div>
        </div>
    );
};

export default MovieDetails;
