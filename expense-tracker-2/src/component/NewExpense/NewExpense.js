import React, { useState } from "react";
import NewExpenseForm from "./NewExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [addNewExpense, setAddNewExpense] = useState(false);
  const expenseDataHandler = (data) => {
    const expenseData = {
      id: Math.random(),
      ...data,
    };
    props.onAddedExpense(expenseData);
  };

  const addExp = () => {
    setAddNewExpense((prev) => (prev = true));
  };

  const addExp2 = () => {
    setAddNewExpense(false);
  };

  return (
    <div className="new-expense">
      {addNewExpense && (
        <NewExpenseForm
          onExpenseData={expenseDataHandler}
          onAddExps={addExp2}
        />
      )}
      {!addNewExpense && (
        <button type="button" onClick={addExp}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
