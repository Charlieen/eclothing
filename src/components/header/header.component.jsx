import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../asset/logo.svg';
import SignIn from '../sign-in/sign-in.component';
import { connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart/cart-dropdown/car-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser }from '../../redux/user/user.selectors';
import { selectCartHidden }from '../../redux/cart/cart.selector';
import { signOut }from '../../redux/user/user.action';

//=({handleSignOut})
/**
 *  <div className="header">
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
 */
import {HeaderContainer, LogoContainer,OptionsContainer,OptionLink }from './header.style';
 class  Header extends React.Component{

    render(){
        const {currentUser,hidden} =this.props;
        return (
<HeaderContainer>

<LogoContainer to="/">
<Logo/>
</LogoContainer>

<OptionsContainer>

    <OptionLink to="/shop">
     SHOP
    </OptionLink>

    <OptionLink to="/contact">
    CONTACT
    </OptionLink>


    { currentUser !== null ?(<OptionLink as='div' onClick={this.props.signOut}>SIGN OUT</OptionLink> ) : (
        <OptionLink to="/signin">
            SIGN IN    
        </OptionLink>
       
    )}
</OptionsContainer>      
<CartIcon/>
{!hidden && (<CartDropDown/>)}    
</HeaderContainer>
    
        );
    }
}  

    

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})


export default connect(mapStateToProps,{signOut})(Header) ;