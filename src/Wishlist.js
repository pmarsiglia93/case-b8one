import React from 'react';
import ProductCard from './ProductCard';

const Wishlist = ({ wishlist, onAddToCart, onToggleWishlist }) => {
    return (
        <div className="wishlist-page">
            <h1>Lista de Favoritos</h1>
            <div className="products">
                {wishlist.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={onAddToCart}
                        onToggleWishlist={onToggleWishlist}
                    />
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
