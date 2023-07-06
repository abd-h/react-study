import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [addNewExpenses, setAddNewExpenses] = useState(false);
  const saveExpensesData = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random(),
      ...enteredExpenseData,
    };
    props.onExpenses(expenseData);
  };
    
    const addExp = () => {
        setAddNewExpenses(prev => prev = true);
    }
    const cancelExp = () => {
        setAddNewExpenses((prev) => (prev = false));
    }
console.log(addNewExpenses);
  return (
    <div className="new-expense">
          {addNewExpenses && <ExpenseForm onCancelExp={cancelExp} onSaveExpensesData={saveExpensesData}  />}
      {!addNewExpenses && <button  onClick={addExp}>Add New Expenses</button>}
    </div>
  );
};

export default NewExpense;
