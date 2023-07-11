import { useState } from 'react'

import { productData } from './data/productData';

import { Product } from './components/Product';
import { Cart } from './components/Cart';

import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([])


  const handleAddToCart = (item) => {
    let cartList = [...cartItems]
    cartList.push(item)
    setCartItems(cartList)
  }

  const handleRemoveFromCart = (index) => {
    let cartList = [...cartItems];
    cartList.splice(index, 1);
    setCartItems(cartList)
  }

  return ( 
    <div className='w-full h-full bg-blue-200 flex flex-col items-center pt-20 gap-12 xl:justify-center xl:items-center xl:gap-32 xl:flex-row xl:h-screen'>
      {productData.map((product, index) => (
        <Product key={index} item={product} onAddToCart={handleAddToCart} />
      ))}
      <Cart items={cartItems} removeItem={handleRemoveFromCart}/>
    </div>
  );
}

export default App;
