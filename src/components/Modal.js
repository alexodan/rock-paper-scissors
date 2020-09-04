import React from "react";
import "./Modal.css";

const Modal = ({ setShowingIntro }) => {
  const handleClick = () => {
    setShowingIntro(false);
  };

  return (
    <div id="modal-container">
      <div id="modal">
        <div className="header" onClick={handleClick}>
          <span>RULES</span>
          <img src={`images/icon-close.svg`} alt="close" />
        </div>
        <img alt="Rules" src={`/images/image-rules.svg`} />
      </div>
    </div>
  );
};

export default Modal;
