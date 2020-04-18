import React from 'react';
import {Link} from 'react-router-dom';
import './header.style.scss';
import {ReactComponent as Logo} from '../../asset/logo.svg';
import { auth } from '../../firebase/firebase.util';
import SignIn from '../sign-in/sign-in.component';


const  Header =({currentUser,handleSignOut}) =>(
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
            { currentUser? <div className="option" onClick={handleSignOut}>SIGN OUT</div> :(
                <Link className="option" to="/signin">
                SIGN IN
                </Link>
            )}
        </div>
    </div>
)

export default Header;