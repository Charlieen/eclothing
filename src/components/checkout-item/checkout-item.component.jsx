import React from 'react';
import './checkout-item.style.scss';
import { increaseCount,decreaseCount,removeItem} from '../../redux/cart/cart.actions';
import {connect} from 'react-redux';

const CheckoutItem = ({increaseCount,decreaseCount,removeItem,item})=>{
        const {imageUrl,name,price,count} = item;
    return(
    <div className="checkout-item">
        <div className="image-container">
        <img className="image" src={imageUrl} alt="item"/>
        </div>
        <span className="name">{name}</span>
         <span className="quantity">
         <span className="decrease" onClick={()=>decreaseCount(item)}>&#10094;</span>
         {count}
         <span className="increase" onClick={()=>increaseCount(item)}>&#10095;</span>
         </span>
         <span className="price">{price}</span>
        <span className="remove-button" onClick={()=>removeItem(item)}>&#10005;</span>
       

    </div>
)}

export default connect(null,{increaseCount,decreaseCount,removeItem}) (CheckoutItem);