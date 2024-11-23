import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './logic/CartProvider';

import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <CartProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="" element={ <HomePage/> }></Route>
          <Route path="cart" element={ <CartPage/> }></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
