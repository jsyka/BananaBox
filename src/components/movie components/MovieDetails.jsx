import React from "react";
import "./MovieDetails.css";
import { useState } from "react";
import RatingComponent from "../rating/RatingComponent";

const MovieDetails = ({ data, addMovieToList }) => {
  const [addListStatus, setAddListStatus] = useState(true);

  const handleAddMovieToList = () => {
    addMovieToList(data.title);
    setAddListStatus(!addListStatus);
  };

  return (
    <div className="moviedetails-container">
      <h2 className="movietitle">{data.title}</h2>
      <div className="moviedetails">
        <div className="poster-container">
          <img
            className="movieposter"
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.title}
          />
        </div>
        {console.log(data)}
        <div className="movieinfo">
          <p className="overview">{data.overview}</p>
          <p>Release Date: {data.release_date}</p>
          <p>Rating: {data.vote_average}</p>
          <p>Genres: {data.genres.map((genre) => genre.name).join(", ")}</p>
          <p>Runtime: {data.runtime} mins</p>
          <RatingComponent movieId={data.id}/>
        </div>
      </div>
      <div className="movieactions">
        {addListStatus ? (
          <button className="actionbutton" onClick={handleAddMovieToList}>
            bookmark
          </button>
        ) : (
          <button className="added2list" onClick={handleAddMovieToList}>
            Added!
          </button>
        )}
        <button className="actionbutton">already watched</button>
        {/* <button className="actionbutton">Rate</button> */}
      </div>
    </div>
  );
};

export default MovieDetails;
