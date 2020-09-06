import React from "react";
import Option from "./Option";
import "./Board.css";

const Board = ({ setUserOption }) => {
  return (
    <div className="Board">
      <div className="container">
        <img className="img" src={`images/bg-triangle.svg`} alt="close" />
        <div className="option-container paper">
          <Option type="paper" setUserOption={setUserOption} />
        </div>
        <div className="option-container rock">
          <Option type="rock" setUserOption={setUserOption} />
        </div>
        <div className="option-container scissors">
          <Option type="scissors" setUserOption={setUserOption} />
        </div>
      </div>
    </div>
  );
};

export default Board;
