import React, { useState } from "react";
import Card from "../UI/Card";

import "./Expenses.css";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredExpenses, setFilteredExpenses] = useState("2016");

  const filteredYear = (year) => setFilteredExpenses((prev) => (prev = year));

  const selectedYear = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredExpenses
  );

  return (
    <Card className="expenses">
      <ExpensesFilter value={filteredExpenses} onFilteredYear={filteredYear} />
     <ExpensesChart expenses={selectedYear} />
      <ExpensesList selectedYear={selectedYear} />
    </Card>
  );
};

export default Expenses;
