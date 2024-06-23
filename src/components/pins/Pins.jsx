import React, { useState, useEffect } from "react";
import "./Pins.css";
import PinsList from "./PinsMovieList";

const Pins = () => {
  const [editingProfile, setEditingProfile] = useState(false);
  const [pinnedMovies, setPinnedMovies] = useState([]);

  useEffect(() => {
    const savedPinnedMovies = localStorage.getItem("pinned");
    if (savedPinnedMovies) {
      setPinnedMovies(JSON.parse(savedPinnedMovies));
    }
  }, []);

  const handleEditPins = () => {
    setEditingProfile(!editingProfile);
  };

  const onPinSelect = (selectedMovies2pin) => {
    setPinnedMovies(selectedMovies2pin);
    setEditingProfile(false); // Close the editing window
  };

  return (
    <>
      <div className="pins-container">
        <h1 className="pins-heading">Pins</h1>
        {pinnedMovies.length > 0 && pinnedMovies.map((movie, index) => (
          <div key={index}>
            <img className="movie" src={`https://image.tmdb.org/t/p/w500${movie.details.poster_path}`} alt={movie.details.title} />
          </div>
        ))}
        <button className="edit-p" onClick={handleEditPins}>
          edit
        </button>
      </div>
      {editingProfile ? (
        <div className="pins-container">
          <PinsList onPinSelect={onPinSelect} />
        </div>
      ) : (
        <p></p>
      )}
    </>
  );
};

export default Pins;
