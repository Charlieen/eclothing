import React from 'react';
import {Link} from 'react-router-dom';
import './header.style.scss';
import {ReactComponent as Logo} from '../../asset/logo.svg';
import SignIn from '../sign-in/sign-in.component';
import { connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart/cart-dropdown/car-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser }from '../../redux/user/user.selectors';
import { selectCartHidden }from '../../redux/cart/cart.selector';

//=({handleSignOut})

class  Header extends React.Component{

    render(){
        const {currentUser,hidden} =this.props;
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
            { currentUser !== null ?(<div className="option" onClick={this.props.handleSignOut}>SIGN OUT</div> ) :(
                <Link className="option" to="/signin">
                SIGN IN
                </Link>
            )}
            <CartIcon/>
        </div>
        {!hidden && (<CartDropDown/>)}    
    </div>
        );
    }
}  

    

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapActionToProps ={}

export default connect(mapStateToProps)(Header) ;