import React from "react";

import classes from "./InvestmentForm.module.css";

const InvestmentForm = (props) => {
  return (
    <form className={classes.investment_form}>
      <p>
        <label htmlFor="currentSaving">Current Savings $</label>
        <input type="text" name="currentSaving" value="" />
      </p>
      <p>
        <label htmlFor="yearlySavings">Yearly Savings $</label>{" "}
        <input type="text" name="yearlySavings" id="yearlySavings" />
      </p>
      <p>
        <label htmlFor="expected_interest">Expected Interest per year $</label>{" "}
        <input type="text" name="yearlySavings" id="yearlySavings" />
      </p>
      <p>
        <label htmlFor="expected_interest">Expected Interest per year $</label>{" "}
        <input type="text" name="yearlySavings" id="yearlySavings" />
      </p>
    </form>
  );
};

export default InvestmentForm;
