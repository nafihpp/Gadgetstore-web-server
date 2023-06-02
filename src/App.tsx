
import './App.css'
import React from 'react'
import { ProductContext } from './context/ProductContext/ProductContext'
import { Product } from './models/models';
import { ProductCard } from './components/ProductCard';
import { CartReducer } from './context/CartContext/CartReducer';
import { CartContext } from './context/CartContext/CartContext';


function App() {
  const { products, productLoading } = React.useContext(ProductContext);
  const HeadingRef = React.useRef<HTMLHeadingElement | null>(null);

  if (productLoading) {
    return <h1>Loading</h1>
  }

  console.log(HeadingRef?.current, '==Element')



  const { cart } = React.useContext(CartContext);

  //error here
  const [state, dispatch] = React.useReducer(CartReducer, cart);

  // console.log(state, '==curent');
  // dispatch({ action: ACTIONS.ADD_TO_CART, payload: products })

  return (
    <React.Fragment>
      <div className="wrapper">
        <h1 ref={HeadingRef}>All the Products</h1>
        <div className='card-container'>
          {products !== undefined && products?.slice(0, 5).map((product: Product) => {
            return <ProductCard product={product} />
          })}
        </div>
        <div>
          <h1>Cart</h1>
        </div>
      </div>
    </React.Fragment >
  )
}

export default App
