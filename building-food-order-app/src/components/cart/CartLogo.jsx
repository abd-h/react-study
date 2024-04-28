import React from 'react'

import basket from "../../assets/images.png";
const CartLogo = ({cartQuantity, onHandleClick}) => {
  return (
    <div>
      <div
        className="cursor-pointer relative flex justify-center rounded-full bg-white border-none w-full"
        onClick={onHandleClick}
      >
        <img
          className=" opacity-1 w-full rounded-[50%] cursor-pointer z-0"
          src={basket}
          alt="basket"
        />

        {cartQuantity !== 0 && (
          <p className="text-black text-sm font-extrabold absolute left-[1.20rem] top-2 w-full h-full z-10 ">{`${cartQuantity}`}</p>
        )}
      </div>
    </div>
  );
}

export default CartLogo