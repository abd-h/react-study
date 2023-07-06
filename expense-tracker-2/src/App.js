import React, { useState } from "react";

import "./App.css";
import Expenses from "./component/Expenses/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";

const initialExpenses = [
  {
<<<<<<< HEAD
    id: "e4",
    title: "DKNY",
    amount: "399.00",
    date: new Date(2019, 6, 12),
  },
  {
=======
>>>>>>> 2d624c785f0435c43253d458635da5ad9fc94598
    id: "e1",
    title: "Running Trainers",
    amount: "94.95",
    date: new Date(2020, 2, 15),
  },
  {
    id: "e2",
    title: "Performance 1851",
    amount: "209.00",
    date: new Date(2021, 9, 23),
  },
  {
    id: "e3",
    title: "Cerruiti",
    amount: "499.00",
    date: new Date(2022, 4, 25),
  },
<<<<<<< HEAD
=======
  {
    id: "e4",
    title: "DKNY",
    amount: "399.00",
    date: new Date(2023, 6, 12),
  },
>>>>>>> 2d624c785f0435c43253d458635da5ad9fc94598
];

function App() {
  const [enteredExpense, setEnteredExpense] = useState(initialExpenses);
<<<<<<< HEAD

=======
>>>>>>> 2d624c785f0435c43253d458635da5ad9fc94598
  const addExpenseHandler = (addedExpenses) => {
    setEnteredExpense((prev) => {
      return [addedExpenses, ...prev];
    });
<<<<<<< HEAD
=======
    console.log(enteredExpense);
>>>>>>> 2d624c785f0435c43253d458635da5ad9fc94598
  };

  return (
    <div className="App">
      <NewExpense onAddedExpense={addExpenseHandler} />
      <Expenses expenses={enteredExpense} />
    </div>
  );
}

export default App;
