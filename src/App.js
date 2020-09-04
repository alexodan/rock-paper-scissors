import React, { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import Board from "./components/Board";
import VersusBoard from "./components/Versus";
import Header from "./components/Header";

export default function App() {
  const [showIntro, setShowingIntro] = useState(true); // TODO: useLocalStorage
  const [score, setScore] = useState(0); // TODO: useLocalStorage
  const [selection, setSelection] = useState(null);

  return (
    <div className="App">
      <Header score={score} />

      {showIntro && <Modal setShowingIntro={setShowingIntro} />}
      {selection === null && <Board setSelection={setSelection} />}
      {selection && <VersusBoard selection={selection} />}

      <button className="rules-btn" onClick={() => setShowingIntro(true)}>
        RULES
      </button>
    </div>
  );
}
