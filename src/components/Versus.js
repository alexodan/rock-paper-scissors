import React, { useState, useEffect } from "react";
import Option from "./Option";
import "./Versus.css";

const POINTS = 20;

const messageDisplay = {
  win: "You win!",
  lose: "You lose!",
  tie: "It's a tie!",
};

const calculateResult = (userOption, computerOption) => {
  if (!computerOption || !userOption) return "";
  if (computerOption === userOption) return "tie";
  if (userOption === "rock") return computerOption === "paper" ? "lose" : "win";
  else if (userOption === "scissors")
    return computerOption === "rock" ? "lose" : "win";
  return computerOption === "scissors" ? "lose" : "win";
};

// ToDo: use useReducer to improve readability and compress the 'business logic' apart from the view.
const VersusBoard = ({ userOption, setUserOption, updateScore }) => {
  const [computerOption, setComputerOption] = useState("");
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const types = ["rock", "scissors", "paper"];
    const resultIndex = Math.floor(Math.random() * 3);

    const intervalId = setInterval(() => {
      const types = ["rock", "scissors", "paper"];
      const index = Math.floor(Math.random() * 3);
      setComputerOption(types[index]);
    }, 150);

    const id = setTimeout(() => {
      clearInterval(intervalId);
      setShowResult(true);
      setComputerOption(types[resultIndex]);
    }, 2000);

    return () => {
      clearTimeout(id);
    };
  }, []);

  useEffect(() => {
    const matchResult = calculateResult(userOption, computerOption);
    // updateScore(matchResult, POINTS);
    setResult(messageDisplay[matchResult]);
  }, [userOption, computerOption, updateScore]);

  const playAgain = () => {
    setUserOption("");
    setComputerOption("");
  };

  return (
    <div className="Versus">
      <div className="Option-container">
        <span className="text">YOU PICKED</span>
        <Option type={userOption} />
      </div>
      <div
        style={{ display: showResult ? "block" : "none" }}
        className="result"
      >
        <p>{result}!</p>
        <button onClick={playAgain}>PLAY AGAIN</button>
      </div>
      <div className="Option-container">
        <span className="text">THE HOUSE PICKED</span>
        <Option type={computerOption} />
      </div>
    </div>
  );
};

export default VersusBoard;
