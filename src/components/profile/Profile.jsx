import React, { useState } from "react";
import { useEffect } from "react";
import "./Profile.css";
import profile from "../../assets/profile.png";

const Profile = () => {


  const [editingProfile, setEditingProfile] = useState(false);
  const [username, setUsername] = useState("Mary Allen");
  const [newUsername, setNewUsername] = useState(username);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
      setNewUsername(storedUsername);
    }
  }, []);

  const handleEditProfile = () => {
    setEditingProfile(!editingProfile);
  };

  const handleUsernameChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handleSaveProfile = () => {
    setUsername(newUsername);
    localStorage.setItem("username", newUsername);
    setEditingProfile(false);
  };

  return (
    <div className="profile-container">
      {editingProfile ? (
        <div className="editing-window">
          <h1 className="profile-heading">Edit Profile</h1>
          <img className="profile-icon" src={profile}/>
          <input
            type="text"
            className="username-input"
            value={newUsername}
            onChange={handleUsernameChange}
          />
          <button className="profile-button"onClick={handleSaveProfile}>Save Profile</button>
        </div>
      ) : (
        <div className="profile-display">
          <h1 className="profile-heading">My Profile</h1>
          <img className="profile-icon" src={profile} />
          <h2 className="username">{username}</h2>
          <h3 className="achievements">Achievements</h3>
          <button className="profile-button" onClick={handleEditProfile}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
