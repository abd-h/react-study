import React, { useState } from "react";

import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const initialExpenses = [
  {
    id: "e1",
    title: "Mobile Insurance",
    amount: 200.0,
    date: new Date(2021, 2, 12),
  },
  { id: "e2", title: "Car Hire", amount: 400.0, date: new Date(2021, 5, 2) },
  {
    id: "e3",
    title: "Television Insurance",
    amount: 56,
    date: new Date(2018, 9, 29),
  },
  {
    id: "e4",
    title: "Sofa Insurance",
    amount: 150.0,
    date: new Date(2011, 5, 12),
  },
];
const App = () => {
  const [enteredExpenses, setEnteredExpenses] = useState(initialExpenses);
  const expenses = (enteredExpenses) => {
    setEnteredExpenses((prev) => [enteredExpenses, ...prev]);
  };
  console.log(enteredExpenses);
  return (
    <div className="App">
      <h1>Let's get started!</h1>
      <NewExpense onExpenses={expenses} />
      <Expenses expenses={enteredExpenses} />
    </div>
  );
};

export default App;
