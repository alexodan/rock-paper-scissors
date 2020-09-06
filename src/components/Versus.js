import React, { useState, useEffect } from "react";
import Option from "./Option";
import "./Versus.css";

const VersusBoard = ({ userOption, setUserOption }) => {
  const [computerOption, setComputerOption] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    console.log("once");
    const id = setTimeout(() => {
      const types = ["rock", "scissors", "paper"];
      const index = Math.floor(Math.random() * 3);
      setComputerOption(types[index]);
    }, 2000);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    const calculateResult = () => {
      console.log(`user: ${userOption}, pc: ${computerOption}`);
      if (!computerOption || !userOption) return "";
      if (computerOption === userOption) return "It's a Tie";
      if (userOption === "rock") {
        return computerOption === "paper" ? "You Lose" : "You Win";
      } else if (userOption === "scissors") {
        return computerOption === "rock" ? "You Lose" : "You Win";
      }
      return computerOption === "scissors" ? "You Lose" : "You Win";
    };

    setResult(calculateResult());
  }, [userOption, computerOption]);

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
      <div style={{ display: result ? "block" : "none" }} className="result">
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
