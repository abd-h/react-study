import React from 'react';

import './ExpensesList.css';

import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {

    if (props.selectedYear.length === 0) {
        return <h2 className="expenses-list__fallback">Out Of Range</h2>
    }
    return (
      <ul className='expenses-list'>
        {props.selectedYear.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    );

}

export default ExpensesList;