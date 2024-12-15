import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Footer from './components/Footer';
import GameSearchView from './views/GameSearchView';
import CartView from './views/CartView';

import './App.css'

export default function App() {


  return (
    <BrowserRouter>
      <header className='app-header'>
        <h1>Games Rental</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/games"/>} />
          <Route path="/games" element={<GameSearchView />} />
          <Route path="/cart" element={<CartView />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
