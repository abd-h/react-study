import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2018");
  const filteredYear = (year) => {
    setSelectedYear((prev) => (prev = year));
  };
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
    </Card>
  );
};

export default Expenses;
