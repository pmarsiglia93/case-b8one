// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import productsData from './products';
import ProductCard from './ProductCard';
import Wishlist from './Wishlist';
import Sidebar from './Sidebar';

function App() {
  const [products, setProducts] = useState(productsData);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleWishlist = (id) => {
    const updatedProducts = products.map(product => {
      if (product.id === id) {
        product.inWishlist = !product.inWishlist;
        if (product.inWishlist) {
          setWishlist([...wishlist, product]);
        } else {
          setWishlist(wishlist.filter(item => item.id !== id));
        }
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const handleAddToCart = (id) => {
    const updatedProducts = products.map(product => {
      if (product.id === id) {
        product.inCart = !product.inCart;
        if (product.inCart) {
          setCart([...cart, product]);
        } else {
          setCart(cart.filter(item => item.id !== id));
        }
      }
      return product;
    });
    setProducts(updatedProducts);
    setIsSidebarOpen(true); // Abrir a aba lateral ao adicionar ao carrinho
  };

  const handleRemoveFromCart = (id) => {
    const updatedProducts = products.map(product => {
      if (product.id === id) {
        product.inCart = false;
      }
      return product;
    });
    setProducts(updatedProducts);
    setCart(cart.filter(item => item.id !== id));
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <div className="menu">
          <div>
            <h2><Link to="/">Home</Link></h2>
          </div>
          <div>
            <h2><Link to="/wishlist">Lista de Favoritos</Link></h2>
          </div>
          <div>
            <h2 className="cart-link" onClick={() => setIsSidebarOpen(true)}>Carrinho</h2>
          </div>
        </div>
        <Routes>
          <Route path="/wishlist" element={<Wishlist wishlist={wishlist} onAddToCart={handleAddToCart} onToggleWishlist={handleToggleWishlist} />} />
          <Route path="/" element={
            <div className="products">
              {products.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  onToggleWishlist={handleToggleWishlist}
                />
              ))}
            </div>
          } />
        </Routes>
        <Sidebar cart={cart} isOpen={isSidebarOpen} onClose={handleSidebarClose} onRemoveFromCart={handleRemoveFromCart} />
      </div>
    </Router>
  );
}

export default App;
