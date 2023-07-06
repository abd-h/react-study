import React, { useState } from "react";

import "./Expenses.css";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2018");
  const filteredYear = (year) => {
    setSelectedYear((prev) => (prev = year));
  };

  const filteredExpenses = props.expenses.filter((item) => {
    return parseInt(selectedYear) === item.date.getFullYear();
  });

  return (
    <Card className="expenses">
      <ExpensesFilter onFilteredYear={filteredYear} value={selectedYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList
        expenses={props.expenses}
        filteredExpenses={filteredExpenses}
        selectedYear={selectedYear}
      />
    </Card>
  );
};

export default Expenses;
