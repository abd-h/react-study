import React from "react";

import './KeyConceptsData.css'

import KeyConcepts from "./KeyConcepts";


const KeyConceptData = (props) => {
    
    const keyconcepts = props.concepts.map((data, i) => (
    <KeyConcepts
      key={i}
      title={data.title}
      img={data.image}
      description={data.description}
    />
  ));
  return <div className="inner-container">{keyconcepts}</div>;
};

export default KeyConceptData;
