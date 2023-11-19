import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  // Checks if time is > 0 but less then timer
  const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  // stops timeInterval when timeRemaining is < 0 which is equal to time is up;
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  // to reset timer
  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prevRemaingTime) => prevRemaingTime - 10);
    }, 10);
  };

  const handleStop = () => {
    dialog.current.open();
    clearInterval(timer.current);
  };
    console.log(timeIsActive);
  return (
    <React.Fragment>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        timeRemaining={timeRemaining}
        onRest={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeIsActive ? handleStop : handleStart}>
            {timeIsActive ? "Stop" : "Start"}
          </button>
        </p>
        <p className={timeIsActive ? "active" : undefined}>
          {timeIsActive ? "Time is running..." : "Time is inactive"}
        </p>
      </section>
    </React.Fragment>
  );
};

export default TimerChallenge;
