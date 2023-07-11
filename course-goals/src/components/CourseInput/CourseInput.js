import React, { useState } from "react";

import "./CourseInput.css";

const CourseInput = (props) => {
  const [inputVal, setInputVal] = useState("");
  const [isValid, setIsValid] = useState(true);

    const inputValueHandler = (e) => {
        if (e.target.value.trim().length > 0) {
            setIsValid(prev => prev = true);
      }
    setInputVal((prev) => (prev = e.target.value));
  };
    

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = {
      text: inputVal,
      id: Math.random(),
    };
      
    props.onListItems(inputValue);
      setInputVal("");
      

    if (inputVal.trim().length === 0) {
      setIsValid((prev) => (prev = false));
        return;
    } 
  };
    
    const labelStyle = { color: !isValid ? "red" : "black" };

    const inputStyle = {
      backgroundColor: !isValid ? "rgb(168, 85, 129)" : 'white',
      border: !isValid ? "2px solid red" : '2px solid black',
    };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
              <label htmlFor="label" style={labelStyle}>Course Goal</label>
        <input type="text" value={inputVal} style={inputStyle} onChange={inputValueHandler} />
        <button type="submit">Add Goal</button>
      </div>
    </form>
  );
};

export default CourseInput;
