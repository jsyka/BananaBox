import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";

const Menu = () => {
  const [homeIsClicked, setHomeIsClicked] = useState(false);
  const [listIsClicked, setListIsClicked] = useState(false);
  const [progressIsClicked, setProgressIsClicked] = useState(false);
  const [discoverIsClicked, setDiscoverIsClicked] = useState(false);
  const [settingsIsClicked, setSettingsIsClicked] = useState(false);

  const handleHomeClick = () => {
    setListIsClicked(false);
    setProgressIsClicked(false);
    setDiscoverIsClicked(false);
    setSettingsIsClicked(false);
    setHomeIsClicked(true);
  };

  const handleListClick = () => {
    setHomeIsClicked(false);
    setProgressIsClicked(false);
    setDiscoverIsClicked(false);
    setSettingsIsClicked(false);
    setListIsClicked(true);
  };

  const handleProgressClick = () => {
    setHomeIsClicked(false);
    setListIsClicked(false);
    setDiscoverIsClicked(false);
    setSettingsIsClicked(false);
    setProgressIsClicked(true);
  };

  const handleDiscoverClick = () => {
    setHomeIsClicked(false);
    setListIsClicked(false);
    setProgressIsClicked(false);
    setSettingsIsClicked(false);
    setDiscoverIsClicked(true);
  };
  const handleSettingsClick = () => {
    setHomeIsClicked(false);
    setListIsClicked(false);
    setProgressIsClicked(false);
    setDiscoverIsClicked(false);
    setSettingsIsClicked(true);
  };

  const removeHighlight =()=>{
    setHomeIsClicked(false);
    setListIsClicked(false);
    setProgressIsClicked(false);
    setDiscoverIsClicked(false);
    setSettingsIsClicked(false);
  }
  return (
    <div className="menu-container">
      <Link to="/BananaBox" onClick={removeHighlight}>
        <img src={logo} className="logo" />
      </Link>
      <div className="menu">
        {console.log("home:" + homeIsClicked)}
        {console.log("list:" + listIsClicked)}
        {console.log("progress:" + progressIsClicked)}
        <ul className="links">
          <li>
            <img src={""} className="icon" />
            <Link
              to="/home"
              className={homeIsClicked ? "nav-clicked" : "nav-text"}
              onClick={handleHomeClick}
            >
              Home
            </Link>
          </li>
          <li>
            <img src={""} className="icon" />
            <Link
              to="/my-list"
              className={listIsClicked ? "nav-clicked" : "nav-text"}
              onClick={handleListClick}
            >
              My List
            </Link>
          </li>
          <li>
            <img src={""} className="icon" />
            <Link
              to="/my-progress"
              className={progressIsClicked ? "nav-clicked" : "nav-text"}
              onClick={handleProgressClick}
            >
              Track
            </Link>
          </li>
          <li>
            <img src={""} className="icon" />
            <Link to="/discover" className={discoverIsClicked ? "nav-clicked" : "nav-text"}
            onClick={handleDiscoverClick}>
              Discover
            </Link>
          </li>
          <li>
            <img src={""} className="icon" />
            <Link to="/settings" className={settingsIsClicked ? "nav-clicked" : "nav-text"}
            onClick={handleSettingsClick}>
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
