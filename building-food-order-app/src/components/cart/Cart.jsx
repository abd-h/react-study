import React, { useContext } from 'react';
import CartModal from './CartModal';
import { MealsCxt } from '../../store/MealsContext';
import { fetchAvailableMeals } from '../../http';

import basket from "../../assets/images.png";
import { useFetch } from '../../hooks/useFetch';

const Cart = () => {

  const { fetchedData } = useFetch(fetchAvailableMeals, []);
  // const totalPrice = fetchedData.reduce((acc, meals) => console.log(meals.price))

  // console.log(totalPrice);

 const {
   handleClick,
   handleClickCart,
   handleAddItemsToCart,
   updateItemQuantity,
 } = useContext(MealsCxt);
    return (
      <section className=" text-yellow-400 bg-transparent text-xl font-thin ">
        <div className="cursor-pointer" onClick={handleClick}>
          <img
            className=" opacity-1 w-10 rounded-3xl shadow-transparent cursor-pointer"
            src={basket}
            alt="basket"
          />
        </div>
        <CartModal>
          {fetchedData.length === 0 && <p>No items in the cart</p>}

          {fetchedData.length > 0 && (
            <ul className="w-3/4 my-8 mx-16  bg-slate-600 text-center">
              {fetchedData.map((meals) => {
                const formatedPrice = `${parseInt(meals.price).toFixed(2)}`;

                return (
                  <li key={meals.id}>
                    <div>
                      <span>{meals.name}</span>
                      <span>{formatedPrice} </span>
                    </div>
                    <div>
                      <button onClick={() => updateItemQuantity(meals.id, -1)}>
                        -
                      </button>
                      { meals.quantity }
                      <button onClick={() => updateItemQuantity(meals.id, 1)}>+</button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </CartModal>
      </section>
    );
}

export default Cart;