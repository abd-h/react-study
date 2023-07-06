<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
>>>>>>> 2d624c785f0435c43253d458635da5ad9fc94598
import NewExpenseForm from "./NewExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
<<<<<<< HEAD
  const [addNewExpense, setAddNewExpense] = useState(false);
=======
>>>>>>> 2d624c785f0435c43253d458635da5ad9fc94598
  const expenseDataHandler = (data) => {
    const expenseData = {
      id: Math.random(),
      ...data,
    };
    props.onAddedExpense(expenseData);
  };
<<<<<<< HEAD

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
=======
  return (
    <div className="new-expense">
      <NewExpenseForm onExpenseData={expenseDataHandler} />
>>>>>>> 2d624c785f0435c43253d458635da5ad9fc94598
    </div>
  );
};

export default NewExpense;
