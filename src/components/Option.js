import React from "react";
import "./Option.css";

const color = {
  rock: "red",
  paper: "blue",
  scissors: "yellow",
};

const Option = ({ type, setSelection }) => {
  const handleClick = () => {
    setSelection(type);
  };

  return (
    <div
      className="Option"
      onClick={handleClick}
      style={{ borderColor: color[type] }}
    >
      <img src={`images/icon-${type}.svg`} alt={type} />
    </div>
  );
};

export default Option;
