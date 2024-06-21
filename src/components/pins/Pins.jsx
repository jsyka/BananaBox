import React, { useState, useEffect } from "react";
import "./Pins.css";
import cmbyn from "../../assets/movies/cmbyn.jpg";
import pastlives from "../../assets/movies/pastlives.jpg";
import PinsList from "./PinsMovieList";

const Pins = () => {
  const [editingProfile, setEditingProfile] = useState(false);
  const [pinnedMovie, setPinnedMovie] = useState(null);

  useEffect(() => {
    const savedPinnedMovie = localStorage.getItem("pinned");
    if (savedPinnedMovie) {
      setPinnedMovie(JSON.parse(savedPinnedMovie));
    }
  }, []);

  const handleEditPins = () => {
    setEditingProfile(!editingProfile);
  };

  const onPinSelect = (selectedMovie2pin) => {
    setPinnedMovie(selectedMovie2pin);
    setEditingProfile(false); // Close the editing window
  };

  return (
    <>
      <div className="pins-container">
        <h1 className="pins-heading">Pins</h1>
        {pinnedMovie && (
          <div>
            <img className="movie" src={`https://image.tmdb.org/t/p/w500${pinnedMovie.details.poster_path}`} alt={pinnedMovie.details.title} />
            {/* <h3>{pinnedMovie.details.title}</h3> */}
          </div>
        )}
        {/* <img className="movie" src={cmbyn} alt="cmbyn" /> */}
        <button className="edit-p" onClick={handleEditPins}>
          edit
        </button>
      </div>
      {editingProfile ? (
        <div className="pins-container">
          <PinsList onPinSelect={onPinSelect} />
          {/* <button className="edit-p" onClick={handleEditPins}>
          Back
        </button> */}
        </div>
      ) : (
        <p>nothing to see</p>
      )}
    </>
  );
};

export default Pins;
