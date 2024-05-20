import React from 'react'
import Cart from './components/Cart/Cart'


import Layout from './components/Layout/Layout'
import Product from './components/Shop/Product'

const App = () => {
  return (
    <div className="text-white">
      <Layout>
        <Cart />
        <Product />
      </Layout>
    </div>
  );
}

export default App