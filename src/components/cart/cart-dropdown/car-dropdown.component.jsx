import React, { Component } from 'react';
import { connect }from 'react-redux';

import { getAllItems }from '../../../redux/shop/shop.actions';
import CustomButton from '../../custom-button/custom-button.component';
import CartItem from '../../cart-item/cart-item.component';

import './cart-dropdown.style.scss';

 const CartDropDown =({cartItems})=> {     
        return (
            <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.map(item=> <CartItem item={item}/>)}
               <CustomButton >GO TO CHECKOUT</CustomButton>
            </div>
            </div>
            
        )
    }


const mapStateToProps = state =>({
    cartItems:state.cart.cartItems
})

export default connect(mapStateToProps)(CartDropDown);