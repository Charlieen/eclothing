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
/**
 * 
 * Use shouldComponentUpdate() 
 * to let React know if a component’s output is not affected by the current change in state or props.
 *  The default behavior is to re-render on every state change, 
 * and in the vast majority of cases you should rely on the default behavior.

shouldComponentUpdate() is invoked before rendering
 when new props or state are being received. 
 Defaults to true. 
 This method is not called for the initial render or when forceUpdate() is used.
 */
/**
 * 每当 点击 添加购物车 一次，=》 redux 中 cartItems 变化，然后 通过 cartItems:selectCartItems 得到新的 cartItems,
 *  ---- 组件  在 componnetDidMount() 后，就是 refresh(),
 * 在CartDropDown 组件内，进行 map 遍历生成, CartItem 组件是否进行 refresh 就要看 针对 CartItem 组件，每次被检查时，
 * preProps and currentProps 是否一致，如果一致，就不刷新，如果不一样就 刷新。(shouldComponentUpdate React.memo())
 * 
 * @param {*} param0 
 */

 /**
  * Use shouldComponentUpdate() to let React know if a component’s output is not affected by the current change in state or props. The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior.
shouldComponentUpdate() is invoked before rendering when new props or state are being received. Defaults to true. This method is not called for the initial render or when forceUpdate() is used.
This method only exists as a performance optimization. Do not rely on it to “prevent” a rendering, as this can lead to bugs. Consider using the built-in PureComponent instead of writing shouldComponentUpdate() by hand. PureComponent performs a shallow comparison of props and state, and reduces the chance that you’ll skip a necessary update.
If you are confident you want to write it by hand, you may compare this.props with nextProps and this.state with nextState and return false to tell React the update can be skipped. Note that returning false does not prevent child components from re-rendering when their state changes.
We do not recommend doing deep equality checks or using JSON.stringify() in shouldComponentUpdate(). It is very inefficient and will harm performance.
Currently, if shouldComponentUpdate() returns false, then UNSAFE_componentWillUpdate(), render(), and componentDidUpdate() will not be invoked. In the future React may treat shouldComponentUpdate() as a hint rather than a strict directive, and returning false may still result in a re-rendering of the component.
  * 
  *   */
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