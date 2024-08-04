// src/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ cart, isOpen, onClose, onRemoveFromCart }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={onClose}>×</button>
            <h2>Carrinho</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <span>{item.name}</span>
                        <button onClick={() => onRemoveFromCart(item.id)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
