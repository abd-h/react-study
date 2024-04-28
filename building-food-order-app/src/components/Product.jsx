import React, { useEffect, useState, useContext } from "react";
import { fetchAvailableMeals } from "../http";
import { useFetch } from "../hooks/useFetch";
import Error from "./Error";
import { MealsCxt } from "../store/MealsContext";


const Product = () => {
  const { isFetching, error, fetchedData } = useFetch(fetchAvailableMeals, []);

  const { handleClick, updateItemQuantity, addItemsToCart,meals } = useContext(MealsCxt);

  if (error) {
    return <Error title="Error" message={error.message} />;
  }
  

  return (
    <ul className="max-w-[50%] m-auto grid sx:grid-cols-1 sm:grid-cols-2 gap-4 xlg:grid-cols-3 justify-center">
      {fetchedData.map((meal) => {
        return (
          <li
            className="shadow-xl text-center bg-[rgba(0,0,0,0.32)]  text-white rounded-3xl overflow-hidden"
            key={meal.id}
          >
            <img
              className="object-cover w-[100%]"
              src={`http://localhost:3000/${meal.image}`}
              alt=""
            />
            <section className="p-4 flex flex-col items-center">
              <h2 className="my-1">{meal.name}</h2>
              <p className="text-xs font-thin py-1  bg-[#424107] w-20 rounded-[4px]">
                £{meal.price}
              </p>
              <p className="text-xs my-4 font-thin">{meal.description}</p>
              <button
                onClick={() => addItemsToCart(meal.id, fetchedData)}
                className="bg-[yellow] text-black font-thin text-xs px-4 rounded-[4px] items-self-end "
              >
                Add to Cart
              </button>
            </section>
          </li>
        );
      })}
    </ul>
  );
};

export default Product;
