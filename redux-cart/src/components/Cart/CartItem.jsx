import React, { useSelector, useDispatch} from "react-redux";
import { quantityActions } from "../../store/quantitySlice";

const CartItem = ({ item }) => {
  const quantity = useSelector((state) => state.quantity.quantity);
  
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(quantityActions.increaseQuantity());
  };

  const handleDecreaseQuantity = () => {
    dispatch(quantityActions.decreaseQuantity());
  }
  
  const { title, price } = item;
  const quantityPrice = price * quantity;
  console.log(quantity, quantityPrice);
  return (
    <li className="my-2">
      <header className=" my-2">
        <div className="flex justify-between content-center">
          <div>
            <h3 className="font-bold mb-4 text-2xl">{title}</h3>
            {quantity > 0 && (
              <p>
                {" "}
                <span className="text-lg">x</span> {quantity}
              </p>
            )}
          </div>
          <div className="flex flex-col justify-between">
            
              <p className="flex flex-col gap-1 items-center py-3">
                {" "}
                <span className=" text-2xl"> ${quantity > 0 ? quantityPrice.toFixed(2) : 0}</span>
                <span className="font-normal text-sm">($6.00/item)</span>
              </p>
            
            <div className="self-end">
              <button
                onClick={handleDecreaseQuantity}
                className="hover:bg-[#505050] border-[1px] mx-2 my-2 text-lg px-4  rounded-md
              "
              >
                -
              </button>
              <button
                onClick={increaseQuantity}
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
