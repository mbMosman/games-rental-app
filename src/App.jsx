import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import CartStatus from './components/CartStatus';
import Footer from './components/Footer';
import GameSearchView from './views/GameSearchView';
import CartView from './views/CartView';

import './App.css'
import { CartProvider } from './contexts/CartContext';

export default function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <div className='title-bar'>
          <Header />
          <div className='nav-bar'>
            <Nav />
            <CartStatus />
          </div>
        </div>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/games"/>} />
            <Route path="/games" element={<GameSearchView />} />
            <Route path="/cart" element={<CartView />} />
          </Routes>
        </main>
      </CartProvider>
      <Footer />
    </BrowserRouter>
  )
}
