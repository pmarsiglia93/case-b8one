// src/ProductCard.js
import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart, onToggleWishlist }) => {
  const [hovered, setHovered] = useState(false);
  const [wishlistState, setWishlistState] = useState('wishlist-default');

  const handleWishlistClick = () => {
    const newState = product.inWishlist ? 'wishlist-default' : 'wishlist-clicked';
    setWishlistState(newState);
    onToggleWishlist(product.id);
  };

  const handleMouseEnter = () => {
    setHovered(true);
    if (!product.inWishlist) {
      setWishlistState('wishlist-hover');
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (!product.inWishlist) {
      setWishlistState('wishlist-default');
    } else {
      setWishlistState('wishlist-active');
    }
  };

  return (
    <div 
      className={`product-card ${hovered ? 'hovered' : ''}`} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <img src={product.image} alt={product.name} />
      <div 
        className={`wishlist-icon ${wishlistState}`} 
        onClick={handleWishlistClick}
      ></div>
      <h2 className="product-name">{product.name}</h2>
      <p className="old-price">R$ {product.oldPrice.toFixed(2)}</p>
      <p className="current-price">R$ {product.price.toFixed(2)}</p>
      <p className="installments">{product.installments}</p>
      <button 
        className={`cart-button ${product.inCart ? 'in-cart' : ''}`} 
        onClick={() => onAddToCart(product.id)}
      >
        {product.inCart ? 'Adicionado' : 'Adicionar'}
      </button>
    </div>
  );
};

export default ProductCard;
