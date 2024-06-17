import React from "react";
import "./Currents.css";
import { useState } from "react";

const Currents = () => {

  const [progress1, setProgress1] = useState(66);
  const updateProgress1 = (percentage) => {
    setProgress1(percentage);
  }

  const [progress2, setProgress2] = useState(26);
  const updateProgress2 = (percentage) => {
    setProgress2(percentage);
  }

  const [progress3, setProgress3] = useState(87);
  const updateProgress3 = (percentage) => {
    setProgress3(percentage);
  }

  return (
    <div className="currents-container">
      <div className="currents">
        <h1 className="heading">My Currents</h1>
        <div className="content-title">
          Book 1
          <div className="bar-container">
            <div className="progress-bar" style={{width: `${progress1}%`}}></div>
          </div>
        </div>
        <div className="content-title">
          Book 2
          <div className="bar-container">
            <div className="progress-bar" style={{width: `${progress2}%`}}></div>
          </div>
        </div>
        <div className="content-title">
          Show 1
          <div className="bar-container">
            <div className="progress-bar-show" style={{width: `${progress3}%`}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currents;
