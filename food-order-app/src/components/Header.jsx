import React, { useContext, useState } from "react";
import logoImg from "../assets/logo.jpg";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import Button from "../UI/Button";
const Header = () => {

  const { items } = useContext(CartContext);
  const { showCart } = useContext(UserProgressContext);
  const basketTotal = items.reduce((acc, item) => (acc += item.quantity), 0);

  const handleShowCart = () => {
    showCart();
  }

  return (
    <header className="px-[5%] mx-auto py-12 flex justify-between items-center">
      <div className=" px-2 flex justify-start items-center">
        <img
          className="w-16 object-contain rounded-full border-2 border-yellow-400"
          src={logoImg}
          alt="Logo image"
        />
        <h1 className="font-['Lato',sans-serif] font-bold text-yellow-400 ml-2 text-2xl tracking-widest uppercase">
          ReactNandos
        </h1>
      </div>
      <nav>
        <Button onClick={handleShowCart} textOnly>Cart ({basketTotal})</Button>
      </nav>
    </header>
  );
};

export default Header;
