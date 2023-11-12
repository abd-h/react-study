import React, { useState, useRef } from "react";

import "../index.css";
const Player = (props) => {
    const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  

  const inputClickHandler = () => {
      setEnteredPlayerName(playerName.current.value)
          playerName.current.value = '';
  };
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ? enteredPlayerName : "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={inputClickHandler}>Set Name</button>
      </p>
    </section>
  );
};

export default Player;
