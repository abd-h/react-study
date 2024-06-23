import React, { Fragment, useEffect } from 'react'
import Cart from './components/Cart/Cart'


import Layout from './components/Layout/Layout'
import Product from './components/Shop/Product'
import { useDispatch, useSelector } from 'react-redux'
import Notification from './components/UI/Notification'
import { fetchCartData, sendCartData } from './store/cart-actions'

let isInitial = true;

const App = () => {
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchCartData())
  },[dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);


  return (
    <Fragment>
      {notification && (
        <Notification title={notification.title} message={notification.message} status={notification.status} />
      )}
      <Layout>
        {showCart && <Cart />}
        <Product />
      </Layout>
    </Fragment>
  );
}

export default App