import React, { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import Board from "./components/Board";
import VersusBoard from "./components/Versus";
import Header from "./components/Header";

export default function App() {
  const [showIntro, setShowingIntro] = useState(false); // TODO: useLocalStorage
  const [score, setScore] = useState(0); // TODO: useLocalStorage
  const [userOption, setUserOption] = useState("");

  return (
    <div className="App">
      <Header score={score} />
      {showIntro && <Modal setShowingIntro={setShowingIntro} />}
      {!userOption && <Board setUserOption={setUserOption} />}
      {userOption && (
        <VersusBoard userOption={userOption} setUserOption={setUserOption} />
      )}
      <button className="rules-btn" onClick={() => setShowingIntro(true)}>
        RULES
      </button>
    </div>
  );
}
