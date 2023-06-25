import React from "react";

import "./ExpenseDate.css";

const ExpenseDate = ({ date }) => {
  const day = date.toLocaleString("en-GB", { day: "numeric" }),
    month = date.toLocaleString("en-GB", { month: "long" }),
    year = date.toLocaleString("en-GB", { year: "numeric" });
  console.log();
  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
