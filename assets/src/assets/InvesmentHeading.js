import React from 'react';

import classes from './InvestmentHeading.module.css'
import investmentLogo from './investment-calculator-logo.png';

const InvestmentHeading = (props) => {
    return (
      <header className={classes["investment-header"]}>
        <img src={investmentLogo} alt="Investment Calculator Logo" srcset="" />
        <p className={classes.p}>Investment Calculator</p>
      </header>
    );
}

export default InvestmentHeading;