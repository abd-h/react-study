import { Fragment } from "react";
import { useSelector } from "react-redux";

import Cards from "../UI/Cards";
import CartItem from "./CartItem";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Fragment>
      <Cards className="max-w-[40rem] text-white flex flex-col tracking-wider my-4 mx-auto bg-[#313132] rounded-md py-2 px-4">
        <h2 className="font-bold capitalize my-4 text-xl ">
          Your Shopping Cart
        </h2>
        <ul className=" py-2 px-4 my-2 ">
          {cartItems.map((item) => (
            <CartItem key={item.id} items={item} />
          ))}
        </ul>
      </Cards>
    </Fragment>
  );
};

export default Cart;
