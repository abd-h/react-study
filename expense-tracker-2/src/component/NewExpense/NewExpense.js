import React from "react";
import NewExpenseForm from "./NewExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const expenseDataHandler = (data) => {
    const expenseData = {
      id: Math.random(),
      ...data,
    };
    props.onAddedExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <NewExpenseForm onExpenseData={expenseDataHandler} />
    </div>
  );
};

export default NewExpense;
