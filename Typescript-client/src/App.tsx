import './App.css'
import './styles/global.css'
import { Header } from './components/Header';
import { BottomNavigationBar } from './components/BottomNavigation';
import { HomePage } from './pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom'
import { Cart } from './pages/Cart/Cart';
import { ProductDetails } from './pages/ProductDetails';
import { LoginPage } from './pages/LoginPage';
import { SingupPage } from './pages/SignupPage';
import { ForgotPassword } from './pages/ForgotPassword';
import { NotFound404 } from './pages/NotFound404';
import { Favourites } from './pages/Favorites';
import { ProtectedRoutes } from './components/Routes/ProtectedRoutes';
import { ProtectedAfterLogin } from './components/Routes/ProtectedAfterLogin';
import { Profile } from './pages/Profile';
import { CategoryFiltering } from './pages/CategoryFiltering';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/category" element={<CategoryFiltering />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound404 />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/favorites" element={<Favourites />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Profile />} />
        </Route>
        <Route element={<ProtectedAfterLogin />}>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SingupPage />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Route>
      </Routes>

      <div className='bottom-navigation-container'>
        <BottomNavigationBar />
      </div>
    </div>
  )
}

export default App



