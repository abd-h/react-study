import React, { useEffect, useState, useContext } from "react";
import { fetchAvailableMeals } from "../http";
import { useFetch } from "../hooks/useFetch";
import Error from "./Error";
import { MealsCxt } from "../store/MealsContext";


const Product = () => {
  const { isFetching, error, fetchedData } = useFetch(fetchAvailableMeals, []);

  const { handleClick, updateItemQuantity, addItemsToCart } = useContext(MealsCxt);

  if (error) {
    return <Error title="Error" message={error.message} />;
  }

  return (
    <ul className="w-[60%] m-auto grid sm:grid-cols-2 grid-cols-3 gap-4 justify-center ">
      {fetchedData.map((meal) => {
        return (
          <li
            className="w-[181px] shadow-xl text-center bg-[rgba(0,0,0,0.32)]  text-white rounded-3xl [p-inline-start:0px] overflow-hidden"
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
                className="bg-[yellow] text-black font-thin text-xs py-1 px-4 rounded-[4px]"
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
