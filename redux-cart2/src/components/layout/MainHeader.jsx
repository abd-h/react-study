import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const MainHeader = () => {
  const totalQuantity = useSelector(state => state.basket.totalQuantity);
  const showBasket = useSelector(state => state.ui.basketIsVisible);

  const dispatch = useDispatch();

  const showBasketHandler = () => {
    dispatch(uiActions.toggle());
  }

  return (
    <>
      <header className="w-full py-6  bg-[#232322]">
        <section className="w-5/6 flex justify-between mx-auto font-sans">
          <h1 className="text-white text-3xl font-bold tracking-widest  ">
            ReduxBasket
          </h1>
          <nav>
            <ul>
              <li>
                <button onClick={showBasketHandler} className="border-2 border-[#eded38] py-1 px-6 rounded-md text-[#f8fa89] text-lg font-bolder tracking-widest hover:bg-yellow-200 hover:text-black">
                  Basket{" "}
                  <span className="text-black bg-[#fbfb34] py-1 px-2 rounded-full font-bold mx-2">
                    {totalQuantity}
                  </span>
                </button>
              </li>
            </ul>
          </nav>
        </section>
      </header>
    </>
  );
};

export default MainHeader;
