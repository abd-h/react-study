import React from "react";

import "./KeyConceptsHeading.css";

const KeyConceptsHeading = (props) => {
  return (
    <heading className="heading">
      <img src={props.keyConceptImage} alt="" />
      <h1>Key React Concepts</h1>
      <p>Selected key React concept you should know about</p>
    </heading>
  );
};

export default KeyConceptsHeading;