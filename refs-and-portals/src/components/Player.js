import { useState, useRef } from "react";

const Player = (props) => {
  const playerName = useRef();
  const [enteredName, setEnteredName] = useState(null);

  const submitHandler = () => {
    
    setEnteredName(playerName.current.value);
    playerName.current.value = "";
  }


  return (
    <section id="player">
      <h2>Welcome {enteredName ? enteredName :"unKnown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={submitHandler}>Set Name</button>
      </p>
    </section>
  );
};

export default Player;
