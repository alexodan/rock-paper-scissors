import React, { useState, useEffect, useRef } from "react";
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

const VersusBoard = ({ userOption, setUserOption, updateScore }) => {
  const computerOption = useRef("");
  const [finalResult, setFinalResult] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [tempComputerOption, setTempComputerOption] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const types = ["rock", "scissors", "paper"];
      const index = Math.floor(Math.random() * 3);
      setTempComputerOption(types[index]);
      computerOption.current = types[index];
    }, 150);

    const id = setTimeout(() => {
      clearInterval(intervalId);
      const matchResult = calculateResult(userOption, computerOption.current);
      setFinalResult(messageDisplay[matchResult]);
      setShowResult(true);
      updateScore(matchResult, POINTS);
    }, 2000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(id);
    };
  }, [userOption]);

  const playAgain = () => {
    setUserOption("");
    computerOption.current = "";
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
        <p>{finalResult}!</p>
        <button onClick={playAgain}>PLAY AGAIN</button>
      </div>
      <div className="Option-container">
        <span className="text">THE HOUSE PICKED</span>
        {showResult ? (
          <Option type={computerOption.current} />
        ) : (
          <Option type={tempComputerOption} />
        )}
      </div>
    </div>
  );
};

export default VersusBoard;
