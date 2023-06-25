import React, { useState } from "react";

import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  // Multiple state approach
  const [enteredTitle, setEnteredTitle] = useState(""),
    [enteredAmount, setEnteredAmount] = useState(""),
    [enteredDate, setEnteredDate] = useState("");

  // One state approach

  // const [userInput, setUserInput] = useState({
  //   inputAmount: '',
  //   inputTitle: '',
  //   inputDate: '',
  // })

  const titleChangeHandler = (e) => {
    // On state approach
    //  setUserInput((prev) => {
    //    return {
    //      ...prev,
    //      inputTitle: e.target.value,
    //    };
    //  });

    setEnteredTitle((prev) => (prev = e.target.value));
  };

  const amountHandler = (e) => {
    setEnteredAmount((prev) => (prev = e.target.value));
  };

  const dateHandler = (e) => {
    setEnteredDate((prev) => (prev = e.target.value));
  };

  // single function for eventHandlers

  const inputChangeHandler = (identifier, value) => {
    return identifier === "title"
      ? setEnteredTitle((prev) => (prev = value))
      : identifier === "amount"
      ? setEnteredAmount((prev) => (prev = value))
      : setEnteredDate((prev) => (prev = value));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={enteredTitle}
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={(event) =>
              inputChangeHandler("amount", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            min="2018-01-01"
            max="2024-12-31"
            value={enteredDate}
            onChange={(event) => inputChangeHandler("date", event.target.value)}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default NewExpenseForm;
