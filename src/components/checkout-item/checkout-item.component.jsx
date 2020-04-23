import React from 'react';
import './checkout-item.style.scss';

const CheckoutItem = ({item:{imageUrl,name,price,count}})=>{
    console.log(imageUrl,name,count,price);
    return(
    <div className="checkout-item">
        <div className="image-container">
        <img className="image" src={imageUrl} alt="item"/>
        </div>
        <span className="name">{name}</span>
         <span className="quantity">{count}</span>
         <span className="price">{price}</span>
        <span className="remove-button">&#10005;</span>
       

    </div>
)}

export default CheckoutItem;