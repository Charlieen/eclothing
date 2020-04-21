import React from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as ShoppingIcon} from '../../asset/cart.svg';
import './cart-icon.style.scss';
import {connect} from 'react-redux';
import { getQuickView} from '../../redux/shop/shop.actions';


import { getAllItems }from '../../redux/shop/shop.actions';

class CartIcon extends React.Component{



    componentDidMount(){
        this.props.getAllItems();
    }

    getQuickView = ()=>{
        this.props.getQuickView();
    }    
  

            
    render(){
        return (
            <div className="cart-icon" onClick={this.getQuickView}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{this.props.shop.cItemsCount}</span>
        </div>
        )
    }
}
const mapStateToProps = state =>({
    shop:state.shop
})

export default connect(mapStateToProps,{getAllItems,getQuickView})(CartIcon);