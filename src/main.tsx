import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ProductProvider } from './context/ProductContext/ProductContext.tsx'
import { CartProvider } from './context/CartContext/CartContext.tsx'
import { BrowserRouter } from 'react-router-dom'
import { BottomNavigationProvider } from './context/BottomNavigationContext/BottomNavigationContext.tsx'
import { AuthProvider } from './context/AuthContext/AuthContext.tsx'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProductProvider>
      <AuthProvider>
        <CartProvider>
          <BottomNavigationProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </BottomNavigationProvider>
        </CartProvider>
      </AuthProvider>
    </ProductProvider>
  </React.StrictMode>
)
