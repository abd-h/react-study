import React, { useState } from 'react';

import InvestmentHeading from "./assets/InvesmentHeading";
import InvestmentForm from "./assets/InvestmentForm/InvestmentForm";
import InvestmentTable from "./assets/InvestmentTable/InvestmentTable";


function App() {
  const [inputData, setInputData] = useState([]);
  const investmentInputData = (...data) => {
    console.log(...data);
    
 }

  return (
    <div className="App">
      <InvestmentHeading />
      <InvestmentForm onInputData={investmentInputData} />
      <InvestmentTable />
    </div>
  );
}

export default App;
