import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTiltle] = useState(""),
    [enteredAmount, setEnteredAmount] = useState(""),
    [enteredDate, setEnteredDate] = useState("");
  const titleChangeHandler = (e) => {
    setEnteredTiltle((prev) => prev = e.target.value);
  };

  const amountChangeHandler = (e) =>
    setEnteredAmount((prev) => (prev = e.target.value));

  const dateChangeHandler = (e) =>
    setEnteredDate((prev) => (prev = e.target.value));

  const cancelBtnHandler = () => {
    setEnteredTiltle("");
    setEnteredDate("");
    setEnteredAmount("");
    props.onCancelExp();
  };

  const submitClickHandler = (e) => {
    e.preventDefault();

    const enteredExpense = 
      {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate),
      }
      ;
    console.log(enteredAmount)
    props.onSaveExpensesData(enteredExpense);
    props.onCancelExp();
    setEnteredTiltle("");
    setEnteredDate("");
    setEnteredAmount("");
  };

  return (
    <form onSubmit={submitClickHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            id="amount"
            name="amount"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense-button">
        <button onClick={cancelBtnHandler}  type="reset">
          Cancel
        </button>
        <button  type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
