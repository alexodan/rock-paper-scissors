import React from "react";
import Option from "./Option";

const VersusBoard = ({ selection }) => {
  // calculate computer option
  const computeComputerOption = () => {
    const types = ["rock", "scissors", "paper"];
    const index = Math.floor(Math.random() * 3);

    return types[index];
  };
  const computerOption = computeComputerOption();

  // computer if player wins or loses
  const matchOutcome = (player, computer) => {
    return "Win";
  };

  // add button to play again and reset game

  return (
    <div>
      <Option type={selection} />
      <div>You {matchOutcome()}!</div>
      <Option type={computerOption} />
    </div>
  );
};

export default VersusBoard;
