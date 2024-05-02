import React from "react";
import Header from "./components/Header";
import Meals from "./components/meal/Meals";
import Cart from "./components/modal/Cart";
import Checkout from "./components/modal/Checkout";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

const App = () => {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <div>
          <Header />
          <Meals />
          <Cart />
          <Checkout />
        </div>
      </CartContextProvider>
    </UserProgressContextProvider>
  );
};

export default App;
