import React from 'react'

const ItemsInBasket = ({ img, name, price }) => {
    
  return (
    <section
      className="w-3/4 flex gap-2 items-center p-4"
    >
      <div className='w-20 '>
        <img className="rounded-xl max-w-full max-h-full object-contain" src={`http://localhost:3000/${img}`} alt="" />
      </div>
      <p className="flex m-auto w-[50%] justify-between">
        <span>{name}</span>
        <span>£{price} </span>
      </p>
    </section>
  );
}

export default ItemsInBasket