import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductList from './pages/ProductList';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <CartProvider> {/* Wrap the entire app with CartProvider */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/products" element={<ProductList/>} />
          <Route path="/product/:id" element={<ProductDetailPage/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/checkout" element={<CheckoutPage/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
