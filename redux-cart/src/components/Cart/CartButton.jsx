import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const CartButton = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(uiActions.toggleCart());
  }


  return (
    <button onClick={showCartHandler}
      className="border border-[#36d1c9] text-[#35d1c9] hover:bg-[#36a5d1] hover:text-white active:text-white  py-[6px] px-2 rounded-md bg-transparent"
    >
      <span className="mx-4 font-semibold  ">My Cart</span>
      <span className="mr-4 bg-[#36d1c9] py-1 px-4 rounded-full text-black ">
        {totalQuantity}
      </span>
    </button>
  );
};

export default CartButton;
