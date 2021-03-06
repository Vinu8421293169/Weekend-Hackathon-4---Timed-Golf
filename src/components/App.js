import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  let x = 0;
  let y = 0;
  let t = 0;
  let interval;
  let gameWin = false;

  const [time, setTime] = useState(0);
  const [ballPosition, setBallPosition] = useState({ top: x, left: y });

  const handleKeydown = (el) => {
    if (gameWin) return;
    if (el.keyCode === 37) y -= 5;
    if (el.keyCode === 38) x -= 5;
    if (el.keyCode === 39) y += 5;
    if (el.keyCode === 40) x += 5;

    setBallPosition({ top: x, left: y });
    if (x === 250 && y === 250) {
      clearInterval(interval);
      gameWin = true;
    }
  };

  const startGame = () => {
    interval = setInterval(() => {
      t += 1;
      return setTime(t);
    }, 1000);
    window.addEventListener("keydown", (el) => handleKeydown(el));
  };

  return (
    <>
      <div
        className="ball"
        style={{
          position: "absolute",
          top: `${ballPosition.top}px`,
          left: `${ballPosition.left}px`
        }}
      />
      <div className="hole" />
      <div className="heading-timer">{time}</div>
      <button
        className="start"
        style={{ position: "absolute", top: "250px", right: "250px" }}
        onClick={startGame}
      >
        Start
      </button>
    </>
  );
};
export default App;
