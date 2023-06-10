import './App.css'
// import { ProductContext } from './context/ProductContext/ProductContext'
import { Header } from './components/Header';
import { BottomNavigationBar } from './components/BottomNavigation/BottomNavigationBar';
import { HomePage } from './pages/HomePage';
import { Route, Routes } from 'react-router-dom'
import { Cart } from './pages/Cart';
import { ProductDetails } from './pages/ProductDetails';
import { Footer } from './components/Footer/Footer';

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
      <Footer />
      <div className='bottom-navigation-container'>
        <BottomNavigationBar />
      </div>
    </div>
  )
}

export default App



