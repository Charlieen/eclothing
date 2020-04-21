import React, { Component } from 'react';
import { connect }from 'react-redux';

import { getAllItems }from '../../../redux/shop/shop.actions';
import CustomButton from '../../custom-button/custom-button.component';

import './cart-dropdown.style.scss';

class CartDropDown extends Component {

    componentDidMount(){
        this.props.getAllItems();
    }
    render() {
        const cartItems = this.props.shop.cartItems;
        return (
            <div className="cart-dropdown">
            <div className="cart-items">
               <CustomButton >GO TO CHECKOUT</CustomButton>
            </div>
            </div>
            
        )
    }
}

const mapStateToProps = state =>({
    shop:state.shop
})
const mapActionToProps = {}

export default connect(mapStateToProps,{getAllItems})(CartDropDown);