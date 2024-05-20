import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartSliceAction } from '../../store/cartSlice';
import { quantityActions } from '../../store/quantitySlice';
import Cards from '../UI/Cards'

const btnCss = "text-sm border-[1px] border-blue-400 text-blue-400 px-5 rounded-[4px] py-[0.40rem] text-right hover:bg-[#00eaff] hover:border-[#00eaff] hover:text-white hover:font-semibold text-semi-bold";

const ProductItems = () => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(quantityActions.increaseQuantity());
  }
    const cost = 6;
  return (
    <li>
      <Cards>
        <header className="flex justify-between font-bold text-xl">
          <h3 className="text-lg">Test</h3>
          <p className="bg-[#3b3b3c] text-red-100 px-8 py-1 rounded-2xl font-[300]">
            ${cost.toFixed(2)}
          </p>
        </header>
        <p className="py-4 text-sm text-[#39393a]">
          This is first product - amazing!
        </p>
        <div className="text-right">
          <button onClick={handleAddToCart} className={btnCss}>
            Add to Cart
          </button>
        </div>
      </Cards>
    </li>
  );
}

export default ProductItems