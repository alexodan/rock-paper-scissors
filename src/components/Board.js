import React from "react";
import Option from "./Option";

const Board = ({ setSelection }) => {
  return (
    <div className="Board">
      {/* <img src={`images/bg-triangle.svg`} alt="close" /> */}
      <Option type="paper" setSelection={setSelection} />
      <Option type="rock" setSelection={setSelection} />
      <Option type="scissors" setSelection={setSelection} />
    </div>
  );
};

export default Board;
