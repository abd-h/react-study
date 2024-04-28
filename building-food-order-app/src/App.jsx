import React, { useContext } from "react";
import SelectedMeals from "./components/cart/SelectedMeals";
import Header from "./components/header/Header";
import Product from "./components/Product";
import { MealsContext } from "./store/MealsContext";

const App = () => {
  
  return (
    <MealsContext>
      
      <Header />
      <Product />
      <SelectedMeals />
    </MealsContext>
  );
};

export default App;
