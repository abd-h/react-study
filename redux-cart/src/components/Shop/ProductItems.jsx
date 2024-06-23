import React from "react";

import Cards from "../UI/Cards";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const btnCss =
  "text-sm border-[1px] border-blue-400 text-blue-400 px-5 rounded-[4px] py-[0.40rem] text-right hover:bg-[#00eaff] hover:border-[#00eaff] hover:text-white hover:font-semibold text-semi-bold";

const ProductItems = ({ items }) => {
  const dispatch = useDispatch();
  const { title, description, price } = items;

  const addToCartHandle = () => {
    dispatch(cartActions.addToCart(items));
  };
  return (
    <li>
      <Cards>
        <header className="flex justify-between font-bold text-xl">
          <h3 className="text-lg">{title}</h3>
          <p className="bg-[#3b3b3c] text-red-100 px-8 py-1 rounded-2xl font-[300]">
            £{price}
          </p>
        </header>
        <p className="py-4 text-sm font-bold tracking-wider uppercase text-[#39393a]">
          {description}
        </p>
        <div className="text-right">
          <button onClick={addToCartHandle} className={btnCss}>
            Add to Cart
          </button>
        </div>
      </Cards>
    </li>
  );
};

export default ProductItems;
