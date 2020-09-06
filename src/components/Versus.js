import React from "react";
import Option from "./Option";
import "./Versus.css";

const VersusBoard = ({ userOption }) => {
  const getComputerOption = () => {
    const types = ["rock", "scissors", "paper"];
    const index = Math.floor(Math.random() * 3);

    return types[index];
  };

  const computerOption = getComputerOption();

  const result = (computerOption) => {
    if (computerOption === userOption) return "Tie";
    if (userOption === "rock") {
      return computerOption === "paper" ? "Lose" : "Win";
    } else if (userOption === "scissors") {
      return computerOption === "rock" ? "Lose" : "Win";
    }
    return computerOption === "scissors" ? "Lose" : "Win";
  };

  return (
    <div className="Versus">
      <div className="Option-container">
        <span className="text">YOU PICKED</span>
        <Option type={userOption} />
      </div>
      <div style={{ display: "none" }} className="result">
        You {result(computerOption)}!
      </div>
      <div className="Option-container">
        <span className="text">THE HOUSE PICKED</span>
        <Option type={computerOption} />
      </div>
    </div>
  );
};

export default VersusBoard;
