import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const openDialogue = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);
  const handleStart = () => {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      openDialogue.current.showModal();
      setTimeExpired(true);
    }, targetTime * 1000);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
  };

  return (
    <React.Fragment>
      <ResultModal
        ref={openDialogue}
        targetTime={targetTime}
        result="You Lost"
      />
      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"}{" "}
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is running..." : "Time is inactive"}
        </p>
      </section>
    </React.Fragment>
  );
};

export default TimerChallenge;
