import React, {useState} from "react";

import classes from "./InvestmentForm.module.css";

const InvestmentForm = (props) => {
    const [inputData, setInputData] = useState()
    const inputDataHandler = (e) => {
        setInputData(prev => {
             return prev = e.target.value
            
        })
        props.onInputData(e.target.value);
    }

console.log(inputData);


  return (
    <form className={classes.investment_form}>
      <div>
        <p>
          <label htmlFor="currentSaving">Current Savings $</label>
          <input onChange={inputDataHandler} type="text" name="currentSaving"  />
        </p>
        <p>
          <label htmlFor="yearlySavings">Yearly Savings $</label>{" "}
          <input onChange={inputDataHandler} type="text" name="yearlySavings" id="yearlySavings" />
        </p>
        <p>
          <label htmlFor="expected_interest">
            Expected Interest per year $
          </label>{" "}
          <input type="text" name="yearlySavings" id="yearlySavings" />
        </p>
        <p>
          <label htmlFor="expected_interest">
            Expected Interest per year $
          </label>{" "}
          <input type="text" name="yearlySavings" id="yearlySavings" />
        </p>
        <div className={classes.btns}>
          <button type="button">Reset</button>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default InvestmentForm;
