// src/App.js
import React, { useState } from 'react';
import productsData from './products';
import ProductCard from './ProductCard';
import './App.css';

const App = () => {
  const [products, setProducts] = useState(productsData);

  const handleAddToCart = (id) => {
    const updatedProducts = products.map(product =>
      product.id === id ? { ...product, inCart: !product.inCart } : product
    );
    setProducts(updatedProducts);
  };

  const handleToggleWishlist = (id) => {
    const updatedProducts = products.map(product =>
      product.id === id ? { ...product, inWishlist: !product.inWishlist } : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div className="App">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
        />
      ))}
    </div>
  );
};

export default App;
