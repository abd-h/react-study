import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
const CartItem = ({ items }) => {
  const { id, price, title } = items;

  const dispatch = useDispatch();

  const increaseQuantityHandler = () => {
    dispatch(cartActions.addToCart(items));
  };

  const decreaseCartQuantityHandler = () => {
    dispatch(cartActions.removeFromCart(items.id));
  };

  return (
    <li className="my-4 py-3 p-6 bg-[#5e5e5e] ">
      <header className=" my-2">
        <div className="flex justify-between content-center">
          <div>
            <h3 className="font-bold mb-4 text-2xl">{items.title}</h3>

            <p>
              {" "}
              <span className="text-lg">x</span> {items.quantity}
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <p className="flex flex-col gap-1 items-center py-3">
              {" "}
              <span className=" text-2xl"> ${items.totalPrice}</span>
              <span className="font-normal text-sm">(${items.price}/item)</span>
            </p>

            <div className="self-end">
              <button
                onClick={decreaseCartQuantityHandler}
                className="hover:bg-[#505050] border-[1px] mx-2 my-2 text-lg px-4  rounded-md
              "
              >
                -
              </button>
              <button
                onClick={increaseQuantityHandler}
                className="hover:bg-[#505050] border-[1px] px-4 text-lg rounded-md
              "
              >
                +
              </button>
            </div>
          </div>
        </div>
      </header>
    </li>
  );
};

export default CartItem;
