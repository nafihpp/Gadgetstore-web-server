import './App.css'
// import { ProductContext } from './context/ProductContext/ProductContext'
import { Header } from './components/Header';
import { BottomNavigationBar } from './components/BottomNavigation/BottomNavigationBar';
import { HomePage } from './pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom'
import { Cart } from './pages/Cart/Cart';
import { ProductDetails } from './pages/ProductDetails';
import { Footer } from './components/Footer/Footer';
import { LoginPage } from './pages/LoginPage';
import { SingupPage } from './pages/SignupPage';
import { ForgotPassword } from './pages/ForgotPassword';
import { NotFound404 } from './pages/NotFound404';

function App() {
  // const { products, productLoading } = React.useContext(ProductContext);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SingupPage />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer />
      <div className='bottom-navigation-container'>
        <BottomNavigationBar />
      </div>
    </div>
  )
}

export default App



