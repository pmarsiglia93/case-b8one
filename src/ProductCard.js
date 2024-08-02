// src/ProductCard.js
import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart, onToggleWishlist }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`product-card ${hovered ? 'hovered' : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>R$ {product.price.toFixed(2)}</p>
            <button
                className={`cart-button ${product.inCart ? 'in-cart' : ''}`}
                onClick={() => onAddToCart(product.id)}
            >
                {product.inCart ? 'Adicionado' : 'Adicionar'}
            </button>
            <button
                className={`wishlist-button ${product.inWishlist ? 'in-wishlist' : ''}`}
                onClick={() => onToggleWishlist(product.id)}
            >
                {product.inWishlist ? 'Remover da Wishlist' : 'Adicionar à Wishlist'}
            </button>
        </div>
    );
};

export default ProductCard;
