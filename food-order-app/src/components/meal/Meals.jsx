import React, { useState, useEffect } from "react";
import useHttp from "../../hooks/useHttp";
import Error from "../Error";
import MealItem from "./MealItem";

const requestConfig = {};

const Meals = () => {

const {
  data: loadedMeals,
  isLoading,
  error,
} = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
  return <p>Fetching Meals...</p>
  }
  if (error) {
    return <Error title='Fail to fetch meals' message={error} />
  }
  // const [loadedMeals, setLoadedMeals] = useState([]);

  // useEffect(() => {
  //   async function fetchMeals() {
  //     const response = await fetch("http://localhost:3000/meals");

  //     if (!response.ok) {
  //     }
  //     const meals = await response.json();
  //     setLoadedMeals(meals);
  //   }
  //   fetchMeals();
  // }, []);

  return (
    <ul className="w-[90] max-w-[70rem] list-none my-8 mx-auto p-4 grid gap-4 grid-cols-meals">
      {loadedMeals.map((meals) => (
        <MealItem key={meals.id} meal={meals} />
      ))}
    </ul>
  );
};

export default Meals;
