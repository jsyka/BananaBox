import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";
import home from "../../assets/home.png";
import homeG from "../../assets/home-green.png";
import list from "../../assets/list.png";
import listG from "../../assets/list-green.png";
import track from "../../assets/tick.png";
import trackG from "../../assets/tick-green.png";
import search from "../../assets/search.png";
import searchG from "../../assets/search-green.png";
import settings from "../../assets/settings.png";
import settingsG from "../../assets/settings-green.png";

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

  const removeHighlight = () => {
    setHomeIsClicked(false);
    setListIsClicked(false);
    setProgressIsClicked(false);
    setDiscoverIsClicked(false);
    setSettingsIsClicked(false);
  };
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
            <Link
              to="/home"
              className={homeIsClicked ? "nav-clicked" : "nav-text"}
              onClick={handleHomeClick}
            >
              <img src={homeIsClicked ? homeG : home} className="icon" />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/my-list"
              className={listIsClicked ? "nav-clicked" : "nav-text"}
              onClick={handleListClick}
            >
              <img src={listIsClicked ? listG : list} className="icon" /> My
              List
            </Link>
          </li>
          <li>
            <Link
              to="/my-progress"
              className={progressIsClicked ? "nav-clicked" : "nav-text"}
              onClick={handleProgressClick}
            >
              <img src={progressIsClicked ? trackG : track} className="icon" />{" "}
              Track
            </Link>
          </li>
          <li>
            <Link
              to="/discover"
              className={discoverIsClicked ? "nav-clicked" : "nav-text"}
              onClick={handleDiscoverClick}
            >
              <img
                src={discoverIsClicked ? searchG : search}
                className="icon"
              />
              Discover
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className={settingsIsClicked ? "nav-clicked" : "nav-text"}
              onClick={handleSettingsClick}
            >
              <img
                src={settingsIsClicked ? settingsG : settings}
                className="icon"
              />
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
