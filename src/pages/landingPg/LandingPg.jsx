import React from "react";
import "./LandingPg.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const LandingPg = () => {
  return (
    <div className="land">
      <img className="logo-land" src={logo} />
      <h1 className="greeting">Welcome to BananaBox</h1>
      <div className="info-container">
        <p className="intro">
          BananaBox is a comprehensive media tracking platform that allows you
          to document and review all the books, films, and TV shows you consume.{" "}
        </p>
      </div>
      <div className="feature-container">
        <div className="feature">Discover new books, shows and films!</div>
        <div className="feature">Track your progress</div>
        <div className="feature">Organize your favourites</div>
      </div>
      <Link to="/home">
      <button className="begin">Let's go</button>
      </Link>
    </div>
  );
};

export default LandingPg;
