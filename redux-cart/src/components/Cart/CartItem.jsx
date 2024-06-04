import { useSelector, useDispatch } from "react-redux";
import { addToCartSliceActions } from "../../store/add-to-cart-slice";

const CartItem = ({ item }) => {
  const selectedItemQuantity = useSelector((state) => state.addToCart.quantity);
  const { name: title, price, totalPrice, id, quantity } = item.item;
  
  // const totalPrice = selectedItemQuantity * price;

  const dispatch = useDispatch();
  const handleIncrease = () => {
    dispatch(addToCartSliceActions.addItemToCart({title, id, price}));
  }

  const handleDecreaseItemQuantity = () => {
    dispatch(addToCartSliceActions.removeItemFromCart(id));
  }

  return (
    <li className="py-2 px-4 my-4 rounded-md bg-[#5e5e5e]">
      <header className=" my-2">
        <div className="flex justify-between content-center">
          <div>
            <h3 className="font-bold mb-4 text-2xl">{title}</h3>

            <p>
              {" "}
              <span className="text-lg">x</span> {quantity}
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <p className="flex gap-1 items-center py-3">
              {" "}
              <span className=" text-2xl"> £{totalPrice} </span>
              <span className="font-normal text-sm">
                (£{price.toFixed(2)}/item)
              </span>
            </p>

            <div className="self-end">
              <button
                onClick={handleDecreaseItemQuantity}
                className="hover:bg-[#505050] border-[1px] mx-2 my-2 text-lg px-4  rounded-md
              "
              >
                -
              </button>
              <button
                onClick={handleIncrease}
                className="hover:bg-[#505050] border-[1px] px-4 text-lg rounded-md
              "
              >
                +
              </button>
            </div>
          </div>
        </div>
      </header>
      <p className="flex justify-between my-2 tracking-widest">
        <span>Total Due</span> <span>£{totalPrice}</span>
      </p>
    </li>
  );
};

export default CartItem;
