import React from 'react';
import './cart-item.style.scss';

const CartItem = ({ item:{imageUrl,price,name,count} })=>(
    <div className="cart-item">
        <img src={imageUrl} alt="item"/>
        <div className="item-details">
        <span className="name">{name}</span>
        <span className="name">{count} x ${price}</span>
        </div>
    </div>
)

export default CartItem; 