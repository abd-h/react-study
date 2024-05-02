import React, { useContext } from 'react'
import { currencyFormmater } from '../../utility/formating';
import Button from '../../UI/Button';
import CartContext from '../../store/CartContext';

const MealItem = ({ meal }) => {
    const { addItem } = useContext(CartContext)
    
    const handleAddMealToCart = () => {
        addItem(meal)
    }
   
  return (
    <li className="bg-[#1d1a16] rounded-2xl overflow-hidden text-center shadow-[0_1px_6px_rgba(0,0,0,0.3)]">
      <article className="h-full flex flex-col justify-between">
        <img
          className="w-full h-80 object-cover"
          src={`http://localhost:3000/${meal.image}`}
          alt={meal.name}
        />
        <div>
          <h3 className="text-2xl font-bold my-3 mx-0 ">{meal.name}</h3>
          <p className="inline-block bg-[#312c1d] text-[#ffc404] text-[0.9rem] font-bold py-2 px-8 m-0 rounded-md tracking-wider">
            {currencyFormmater.format(meal.price)}
          </p>
          <p className="m-4">{meal.description}</p>
        </div>
        <p className="mb-6">
          <Button onClick={handleAddMealToCart} >
            Add to Cart
          </Button>
        </p>
      </article>
    </li>
  );
}

export default MealItem