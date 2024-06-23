import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { basketActions } from "../../store/basket-slice";

const BasketItem = ({title, price, id, description, totalPrice, items }) => {
  const dispatch = useDispatch();

  const increaseQuantityHandler = () => {
    dispatch(basketActions.addToBasket(items));
  };

  const decreaseQuantityHandler = () => {
    dispatch(basketActions.removeItemFromBasket(items.id));
  };

  return (
    <li className="bg-[grey] py-6 text-white font-bold  w-5/6 my-4 mx-auto capitalize rounded-sm px-4 flex justify-between">
      <h2 className="text-xl tracking-wide">{title}</h2>
      <section className="flex flex-col items-center">
        <p>£{totalPrice.toFixed(2)}</p>
        <p className="text-xs my-2">(£{price.toFixed(2)}/ item)</p>
        <p className="flex py-1">
          <button
            onClick={decreaseQuantityHandler}
            className="border-[1px] px-4 rounded-md mx-2 border-white hover:bg-slate-900"
          >
            -
          </button>
          <button
            onClick={increaseQuantityHandler}
            className="border-[1px] px-4 rounded-md mx-2 border-white hover:bg-slate-900"
          >
            +
          </button>
        </p>
      </section>
    </li>
  );
};

export default BasketItem;
