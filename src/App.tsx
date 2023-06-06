
import './App.css'
import React from 'react'
import { ProductContext } from './context/ProductContext/ProductContext'
import { Product } from './models/models';
import { ProductCard } from './components/ProductCard';
import { CartContext } from './context/CartContext/CartContext';
import { CartCard } from './components/CartCard/CartCard';
import { Header } from './components/Header';

function App() {
  const { products, productLoading } = React.useContext(ProductContext);
  const { cart } = React.useContext(CartContext);
  console.log(cart, '==cart')
  const HeadingRef = React.useRef<HTMLHeadingElement | null>(null);

  if (productLoading) {
    return <h1>Loading</h1>
  }

  return (

    <div>
      <Header />
      <div className="wrapper">
        <h1 ref={HeadingRef}>All the Products</h1>
        <div className='card-container'>
          {products !== undefined && products?.slice(0, 3).map((product: Product) => {
            return <ProductCard product={product} key={product.id} />
          })}
        </div>
        <div>
          <h1>Cart</h1>
          <div className='card-container'>
            {cart?.length !== 0 && cart?.map((product) => {
              return <CartCard product={product} key={product.id} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
