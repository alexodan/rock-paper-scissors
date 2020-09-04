import React from "react";
import "./Header.css";

const Header = ({ score }) => {
  return (
    <div className="Header">
      <h1 className="title">
        <span>Rock</span>
        <span>Papers</span>
        <span>Scissors</span>
      </h1>
      <div className="score">
        <span className="title">SCORE</span>
        <span className="point">{score}</span>
      </div>
    </div>
  );
};

export default Header;
