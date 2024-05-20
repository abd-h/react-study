import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { cartSliceAction } from "../../store/cartSlice";

import { quantityActions } from "../../store/quantitySlice";

const CartButton = () => {
  const showCart = useSelector((state) => state.cart.showCart);


  const cartItemTotal = useSelector((state) => state.quantity.quantity);


  const dispatch = useDispatch();

  const handleShowCart = () => {
    dispatch(cartSliceAction.openCart());
  };
 
  return (
    <button
      onClick={handleShowCart}
      className="border border-[#36d1c9] text-[#35d1c9] hover:bg-[#36a5d1] hover:text-white active:text-white  py-[6px] px-2 rounded-md bg-transparent"
    >
      <span className="mx-4 font-semibold  ">My Cart</span>
      <span className="mr-4 bg-[#36d1c9] py-1 px-4 rounded-full text-black ">
        {cartItemTotal > 0? cartItemTotal : 0}
      </span>
    </button>
  );
};

export default CartButton;
