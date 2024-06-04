import { Fragment } from "react";
import { useSelector } from "react-redux";
import Cards from "../UI/Cards";
import CartItem from "./CartItem";

const Cart = () => {
 const cartTotal = useSelector(state => state.addToCart.totalPrice) 
  const quantity = useSelector((state) => state.addToCart.quantity);
  const cartItem = useSelector(state => state.addToCart.items);
 console.log(cartTotal);
  return (
    <Fragment>
      <Cards className="max-w-[35rem] text-white flex flex-col tracking-wider my-4 mx-auto bg-[#313132] rounded-md py-2 px-4">
        <h2 className="font-bold capitalize my-4 text-xl ">
          Your Shopping Cart
        </h2>
        <ul className="  mb-6 flex flex-col">
          {cartItem.length === 0 && <p>Your Basket is empty</p>}
          {cartItem.length > 0 &&
            cartItem.map((item) => <CartItem key={item.id} item={{ item }} />)}
        </ul>
        <Cards className="w-full text-white flex flex-col tracking-wider my-4 mx-auto bg-[#787878] rounded-md py-2 px-4">
          <p className="w-full flex justify-between my-2 tracking-widest">
            <span>Total Due</span> <span>£{cartTotal}</span>
          </p>
        </Cards>
      </Cards>
    </Fragment>
  );
};

export default Cart;
