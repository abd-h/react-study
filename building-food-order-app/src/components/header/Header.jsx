import React from "react";
import logo from "../../assets/logo.jpg";
import Cart from "../cart/Cart";

const Header = () => {
  return (
    <div className="w-full my-8 flex justify-center">
      <header className="mx-auot w-[80%] px-2 flex justify-between items-center">
        <section className=" my-4 flex items-center">
          <img
            className="w-10 rounded-full border-2 border-yellow-400"
            src={logo}
            alt="logo"
          />
          <h1 className="text-yellow-400 ml-2 text-2xl tracking-widest uppercase">
            ReactFood
          </h1>
        </section>
        <Cart />
      </header>
    </div>
  );
};

export default Header;
