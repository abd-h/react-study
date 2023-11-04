import React from 'react';

import classes from './InvestmentTable.module.css';

const InvestmentTable = (props) => {
    return (
        <table border={0} className={classes.investment_table}>
            <thead>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Intrest (Year)</th>
                <th>Total Intrest</th>
                <th>Intrest Capital</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>$11,700.00</td>
                    <td>$500.00</td>
                    <td>$500</td>
                    <td>$11200.00</td>
                </tr>
            </tbody>
        </table>
    )
}

export default InvestmentTable;