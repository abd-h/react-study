import React, { useState } from "react";


import styles from "./CourseInput.module.css";
import Button from '../../UI/Button/Button'



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
      
    props.onAddGoal(inputValue);
      setInputVal("");
      

    if (inputVal.trim().length === 0) {
      setIsValid((prev) => (prev = false));
        return;
    } 
  };
    
    const labelStyle = { color: !isValid ? "red" : "black" };

    // const inputStyle = {
    //   backgroundColor: !isValid ? "rgb(168, 85, 129)" : 'white',
    //   border: !isValid ? "2px solid red" : '2px solid black',
    // };
  return (
    <form onSubmit={handleSubmit}>
      <div className={`${styles['form-control']} ${!isValid? styles['invalid'] : ''}`}>
        <label htmlFor="label" style={labelStyle}>
          Course Goal
        </label>
        <input type="text" value={inputVal} onChange={inputValueHandler} />
              
              <Button type='submit'>Add Goal</Button>
      </div>
    </form>
  );
};

export default CourseInput;
