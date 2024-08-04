// src/ProductCard.js
import React, { useState, useEffect } from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart, onToggleWishlist }) => {
  const [wishlistState, setWishlistState] = useState('wishlist-default');

  useEffect(() => {
    setWishlistState(product.inWishlist ? 'wishlist-active' : 'wishlist-default');
  }, [product.inWishlist]);

  const handleWishlistClick = () => {
    onToggleWishlist(product.id);
    setWishlistState(product.inWishlist ? 'wishlist-default' : 'wishlist-clicked');
  };

  const handleMouseEnter = () => {
    if (!product.inWishlist) {
      setWishlistState('wishlist-hover');
    }
  };

  const handleMouseLeave = () => {
    setWishlistState(product.inWishlist ? 'wishlist-active' : 'wishlist-default');
  };

  return (
    <div
      className="product-card"
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
      <p className="installments">
        em até <span className="installments-bold">10x de R$ 259,90</span> sem juros
      </p>
      <button
        className={`cart-button ${product.inCart ? 'in-cart' : ''}`}
        onClick={() => onAddToCart(product.id)}
      >
        {product.inCart ? 'ADICIONADO' : 'ADICIONAR'}
      </button>
    </div>
  );
};

export default ProductCard;
