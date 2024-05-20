import React from 'react'
import ProductItems from './ProductItems'

const Product = () => {
  return (
      <section className='flex flex-col mx-auto w-full text-black m-4'>
          <h2 className='text-white text-center uppercase font-bold text-xl tracking-wider'>Buy Your favourite product </h2>
          <ul>
          <ProductItems />
          
          </ul>
      </section>
  )
}

export default Product