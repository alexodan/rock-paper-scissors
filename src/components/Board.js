import React from "react";
import Option from "./Option";
import "./Board.css";

const Board = ({ setSelection }) => {
  return (
    <div className="Board">
      <div className="container">
        <img className="img" src={`images/bg-triangle.svg`} alt="close" />
        {/* <div className="options"> */}
        <div className="option-container paper">
          <Option type="paper" setSelection={setSelection} />
        </div>
        <div className="option-container rock">
          <Option type="rock" setSelection={setSelection} />
        </div>
        <div className="option-container scissors">
          <Option type="scissors" setSelection={setSelection} />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Board;
