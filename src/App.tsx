
import './App.css'
// import { ProductContext } from './context/ProductContext/ProductContext'
import { Header } from './components/Header';
import { BottomNavigationBar } from './components/BottomNavigation/BottomNavigationBar';
import { HomePage } from './pages/HomePage';
import { Route, Routes } from 'react-router-dom'
import { Cart } from './pages/Cart';
import { ProductDetails } from './pages/ProductDetails';



function App() {
  // const { products, productLoading } = React.useContext(ProductContext);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h1>404 Page not Found</h1>} />
      </Routes>
      <div className='bottom-navigation-container'>
        <BottomNavigationBar />
      </div>
    </div>
  )
}

export default App


{/* <h1>Cart</h1>
      <div className='card-container'>
        {cart?.length !== 0 && cart?.map((cartproduct) => {
          return <CartCard cartproduct={cartproduct} key={cartproduct?.id} />
        })}
      </div> */}
