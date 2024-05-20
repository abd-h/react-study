import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cards from '../UI/Cards'
import CartItem from './CartItem';
import { quantityActions } from '../../store/quantitySlice';

const Cart = () => {
  const showCart = useSelector(state => state.cart.showCart);

  

  console.log(showCart,);
  return (
    <Fragment>
      {showCart && (
        <Cards className="max-w-[30rem] text-white flex flex-col tracking-wider my-4 mx-auto bg-[#313132] rounded-md py-2 px-4">
          <h2 className="font-bold capitalize my-4 text-xl ">
            Your Shopping Cart
          </h2>
          <ul className="bg-[#5e5e5e] py-2 px-4 mb-6 ">
            <CartItem
              item={{ title: "Test Item",  total: 18, price: 6 }}
            />
          </ul>
        </Cards>
      )}
    </Fragment>
  );
}

export default Cart