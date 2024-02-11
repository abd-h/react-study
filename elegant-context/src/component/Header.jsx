import React, { useContext, Fragment, useRef } from "react";
import logo from "../assets/logo.png";
import { AddItemsToCtx } from "./AddItemToCartContext";
import CartModal from "./CartModal";

const Header = () => {
  const modal = useRef();
  const { items, updateItemQuantity } =
    useContext(AddItemsToCtx);

  const cartQuantity = items.length;

  console.log(cartQuantity);

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = (
    <button className="py-2 px-6 my-2 hover:bg-[#f5b744] rounded-md mx-4">Close</button>
  );

  if (cartQuantity > 0) {
    modalActions = (
      <p className="m-2">
        <button className="bg-transparent border-none rounded-[5px] text-[#201e1a] cursor-pointer text-[1.1rem] hover:text-[#453719] mr-4 ">
          Close
        </button>
        <button className="bg-[#271e07] border-none rounded-[5px] py-2 px-4 text-[#f9efda] text-[1rem] curser-pointer ">
          Checkout
        </button>
      </p>
    );
  }

  return (
    <React.Fragment>
      <CartModal
        ref={modal}
        onUpdateCartItemQuantity={updateItemQuantity}
        title="Your Cart"
        actions={modalActions}
      />
      <header
        id="main-header"
        className="flex justify-between items-center py-12 px-[15%]"
      >
        <div id="main-title" className="flex items-center">
          <img className="w-[5rem] mr-6" src={logo} alt="logo" />
          <h1 className="text-[#edbf68] shaddow-[0 0 4px rgba(35,34, 34, 0.4)] uppercase text-[2.5rem] m-0">
            Elegant Context
          </h1>
        </div>
        <p>
          <button
            onClick={handleOpenCartClick}
            className="bg-[#edbf68] border-none rounded-[5px] py-2 px-6 text-[#201e1a] text-xl cursor-pointer hover:bg-[#f5b744]"
          >
            Cart ({cartQuantity})
          </button>
        </p>
      </header>
    </React.Fragment>
  );
};
export default Header;
