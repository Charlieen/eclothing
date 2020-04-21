import React from 'react';
import {Link} from 'react-router-dom';
import './header.style.scss';
import {ReactComponent as Logo} from '../../asset/logo.svg';
import { auth } from '../../firebase/firebase.util';
import SignIn from '../sign-in/sign-in.component';
import { connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart/cart-dropdown/car-dropdown.component';

//=({handleSignOut})

class  Header extends React.Component{

    render(){

        return (
        <div className="header">
        <Link className="logo-container" to="/">
        <Logo className="logo"/>
         </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/contact">
            CONTACT
            </Link>
            { this.props.user.currentUser !== null ?(<div className="option" onClick={this.props.handleSignOut}>SIGN OUT</div> ) :(
                <Link className="option" to="/signin">
                SIGN IN
                </Link>
            )}
            <CartIcon/>
        </div>
        {this.props.shop.quickView && (<CartDropDown/>)}    
    </div>
        );
    }
}  

    

const mapStateToProps = state =>({
    user:state.user,
    shop:state.shop
})

const mapActionToProps ={}

export default connect(mapStateToProps)(Header) ;