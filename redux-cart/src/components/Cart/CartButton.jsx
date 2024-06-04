import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { uiSliceActions } from "../../store/ui-slice";

const CartButton = () => {
  const quantity = useSelector(state => state.addToCart.quantity);
  const dispatch = useDispatch();

  const handleToggleCart = () => {
    dispatch(uiSliceActions.toggleCart());
  }
 
  return (
    <button onClick={handleToggleCart}
      className="border border-[#36d1c9] text-[#35d1c9] hover:bg-[#36a5d1] hover:text-white active:text-white  py-[6px] px-2 rounded-md bg-transparent"
    >
      <span className="mx-4 font-semibold  ">My Cart</span>
      <span className="mr-4 bg-[#36d1c9] py-1 px-4 rounded-full text-black ">
       {quantity}
      </span>
    </button>
  );
};

export default CartButton;
