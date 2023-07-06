import React, { useState } from "react";

import "./Expenses.css";
<<<<<<< HEAD

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

=======
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

>>>>>>> 2d624c785f0435c43253d458635da5ad9fc94598
const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2018");
  const filteredYear = (year) => {
    setSelectedYear((prev) => (prev = year));
  };
<<<<<<< HEAD

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
=======
  console.log(parseInt(selectedYear));
  const filteredDate = props.expenses.filter((item) => {
    return parseInt(selectedYear) === item.date.getFullYear();
  });
  
  return (
    <Card className="expenses">
      <ExpensesFilter onFilteredYear={filteredYear} value={selectedYear} />
      {filteredDate.length > 0 &&
        filteredDate.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      {filteredDate.length == 0 && <h2 className="out-of">Out of Range</h2>}
>>>>>>> 2d624c785f0435c43253d458635da5ad9fc94598
    </Card>
  );
};

export default Expenses;
