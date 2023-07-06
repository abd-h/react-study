import React from 'react';

import './KeyConcepts.css'
import Card from './UI/Card';

const KeyConcepts = (props) => {
    
    return (
      <div className="container-outer">
        <Card className="container-inner">
          <img src={props.img} alt="" className='img'/>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </Card>
      </div>
    );
}

export default KeyConcepts;