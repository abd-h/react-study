import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Layout from "./components/layout/Layout";
import Product from "./components/shop/Product";
import Basket from "./components/basket/Basket";
import { fetchBasketData, sendBasketData } from "./store/basket-actions";

let isIinitial = true;

const App = () => {
  const dispatch = useDispatch();
  const showBasket = useSelector((state) => state.ui.basketIsVisible);

  const basket = useSelector(state => state.basket);

  console.log(basket);

  useEffect(() => {
    dispatch(fetchBasketData())
  },[dispatch])

  useEffect(() => {
    if (isIinitial) {
      isIinitial = false;
      return;
    }

    if (basket.changed) {
      dispatch(sendBasketData(basket))
    }
  }, [basket, dispatch]);
  

  

  return (
    <>
      <div className="w-full h-full mb-4 ">
        <Layout>
          {showBasket && <Basket />}
          <Product />
        </Layout>
      </div>
    </>
  );
};

export default App;
