import React from 'react';
import { ReactComponent as ShoppingIcon} from '../../asset/cart.svg';
import './cart-icon.style.scss';
import {connect} from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions'


const CartIcon =(props) =>{
    
    const {toggleCartHidden,cartItems} = props;
    const total = cartItems? cartItems.reduce((acc,item)=>acc+item.count ,0):0;
    return(
    <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon"/>
    <span className="item-count">{total}</span>
    </div>)
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
})

const mapStateToProps = state =>({
    cartItems:state.cart.cartItems
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);