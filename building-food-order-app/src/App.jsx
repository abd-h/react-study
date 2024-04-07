import React from "react";
import Header from "./components/header/Header";
import Product from "./components/Product";
import { MealsContext } from "./store/MealsContext";

const App = () => {
  return (
    <MealsContext>
      
      <Header />
      <Product />
    </MealsContext>
  );
};

export default App;
