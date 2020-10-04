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

  const updateScore = (matchResult, points) => {
    if (matchResult === "win") {
      setScore(score + points);
    } else if (matchResult === "loose") {
      setScore(score - points > 0 ? score : score - points);
    }
  };

  return (
    <div className="App">
      <Header score={score} />
      {showIntro && <Modal setShowingIntro={setShowingIntro} />}
      {!userOption && <Board setUserOption={setUserOption} />}
      {userOption && (
        <VersusBoard
          userOption={userOption}
          setUserOption={setUserOption}
          updateScore={updateScore}
        />
      )}
      <button className="rules-btn" onClick={() => setShowingIntro(true)}>
        RULES
      </button>
    </div>
  );
}
