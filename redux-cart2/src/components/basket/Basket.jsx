import React from 'react'
import { useSelector } from 'react-redux'
import BasketItem from './BasketItem';
import Cards from '../UI/Cards';


const Basket = () => {
  const basketItems = useSelector(state => state.basket.items);
  
  const totalQuantity = useSelector(state => state.basket.totalQuantity);
  console.log(basketItems);
   
  return (
    <>
      <Cards className="bg-[#060505] my-8 max-w-[40rem] mx-auto py-4 rounded-md">
        {basketItems.length === 0 && (
          <p className="text-white text-center font-bold text-xl tracking-widest uppercase py-4">
            Empty basket
          </p>
        )}
        {totalQuantity > 0 && (
          <ul>
            {basketItems.map((item) => (
              <BasketItem key={ item.id }
                id={ item.id }
                price={ item.price }
                title={ item.title }
                despcription={ item.despcription }
                totalPrice={ item.totalPrice }
                quantity={item.quantity}
                items={ item } />
              ))}
          </ul>
        )}
      </Cards>
    </>
  );
}

export default Basket