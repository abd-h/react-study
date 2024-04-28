import React, { useContext } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { fetchAvailableMeals } from '../../http'
import { MealsCxt } from '../../store/MealsContext';
import ItemsInBasket from './ItemsInBasket';


const SelectedMeals = () => {
    const { meals, updateItemQuantity } = useContext( MealsCxt);
    
  return (
      <ul className="my-8 text-center">
        {meals.map((meals) => {
          const formatedPrice = `${parseFloat(meals.price)}`;

          return (
            <li className="flex  items-center m-auto" key={meals.id}>
              <ItemsInBasket
                name={meals.name}
                price={formatedPrice}
                img={meals.image}
              />
              <div className="px-4 self-center w-24 flex justify-end">
                <button onClick={() => updateItemQuantity(meals.id, -1)}>
                  -
                </button>
                <strong className=" mx-4 ">{meals.quantity}</strong>
                <button onClick={() => updateItemQuantity(meals.id, 1)}>
                  +
                </button>
              </div>
            </li>
          );
        })}
      </ul>
  );
}

export default SelectedMeals