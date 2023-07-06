import React from "react";

import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  // const filteredDate = props.expenses.filter((item) => {
  //   return parseInt(props.selectedYear) === item.date.getFullYear();
  // });

  if (props.filteredExpenses.length === 0) {
    return <p className="expenses-list__fallback">Out of Range</p>;
  }

  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
