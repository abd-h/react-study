import React, { useContext, useState } from "react";
import CartModal from "./CartModal";
import { MealsCxt } from "../../store/MealsContext";
import { fetchAvailableMeals } from "../../http";


import { useFetch } from "../../hooks/useFetch";
import SelectedMeals from "./SelectedMeals";
import CheckoutForm from "./CheckoutForm";
import CartLogo from "./CartLogo";

const Cart = () => {
  const { fetchedData } = useFetch(fetchAvailableMeals, []);

  const {
    handleClick,
    handleCheckout,
    isCheckout,
    handleClickCart,
    meals,
  } = useContext(MealsCxt);

  const cartQuantity = meals.reduce((acc, item) => (acc += item.quantity), 0);


  const totalMealPrice = meals.reduce((acc, price) => {
    return (acc += parseFloat(price.price) * price.quantity);
  }, 0);

  return (
    <section className="rounded text-yellow-400 bg-[rgb(34,25,0)] text-xl font-thin overflow-hidden ">
      <CartLogo cartQuantity={cartQuantity} onHandleClick={handleClick} />
      <CartModal>
        {isCheckout && <CheckoutForm totalMealPrice={totalMealPrice} />}
        {meals.length === 0 && (
          <p className="text-2xl p-4">No items in the cart</p>
        )}

        {!isCheckout && meals.length > 0 && <SelectedMeals />}
        {!isCheckout && (
          <div className="flex flex-col">
            <div className="mx-8">
              <strong> Total = £{totalMealPrice}</strong>
            </div>

            <div>
              <button
                className=" hover:bg-[yellow] text-black font-bold text-sm py-2 px-4 m-4 rounded-[4px]"
                onClick={handleClickCart}
              >
                Continue Shopping
              </button>
              {cartQuantity !== 0 && (
                <button
                  className="bg-[#cdb500] text-black font-bold text-sm py-2 px-4 m-4 rounded-[4px]"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
              )}
            </div>
          </div>
        )}
      </CartModal>
    </section>
  );
};

export default Cart;
