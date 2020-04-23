import React, { Component } from 'react';
import { connect }from 'react-redux';
//import {Link} from 'react-router-dom';
import { withRouter }from 'react-router-dom';
import { getAllItems }from '../../../redux/shop/shop.actions';
import CustomButton from '../../custom-button/custom-button.component';
import CartItem from '../../cart-item/cart-item.component';
import { selectCartItems } from '../../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden }from '../../../redux/cart/cart.actions';

import './cart-dropdown.style.scss';

// <Link to="/checkout">
// <CustomButton onClick={()=>toggleCartHidden()} >GO TO CHECKOUT</CustomButton>
// </Link>

 const CartDropDown =({cartItems,dispatch,history})=> {     
        return (
            <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length >0 ? cartItems.map(item=> <CartItem key={item.id} item={item}/>):
                (<span className="empty-message">Your cart is empty</span>)
            }
          
                 <CustomButton onClick={()=>{
                     dispatch(toggleCartHidden());
                    history.push('/checkout');
                }} >GO TO CHECKOUT</CustomButton>
     
             
            </div>
            </div>
            
        )
    }


const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
})
  

// export default withRouter( connect(mapStateToProps,{toggleCartHidden})(CartDropDown));
export default withRouter(connect(mapStateToProps)(CartDropDown));