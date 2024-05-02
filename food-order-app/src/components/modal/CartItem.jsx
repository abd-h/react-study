import React from "react";
import { currencyFormmater } from "../../utility/formating";

const CartItem = ({ id, name, quantity, price, onIncrease, onDecrease }) => {
  const btnCss =
    "cursor-pointer text-[1rem] w-[1.5rem] rounded-[50%] border-none bg-[#312c1d] text-[#ffc404] flex justify-center items-center";

  return (
    <li key={id} className="flex justify-between items-center my-2 mx-0">
      <p className="m-0">{name} - {quantity} x {currencyFormmater.format(price)} </p>
      <p className="flex gap-4 items-center">
        <button onClick={onDecrease} className={btnCss}>
          -
        </button>
        <span> {quantity}</span>
        <button onClick={onIncrease} className={btnCss}>
          +
        </button>
      </p>
    </li>
  );
};

export default CartItem;
