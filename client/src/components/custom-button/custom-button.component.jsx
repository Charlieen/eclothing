import React from 'react';
import './custom-button.style.scss';
import { CustomButtonContainer,GoogleLogin,Inve} from './custom-button.style';

const CustomButton =({children, isGoogleSignIn,inverted, ...otherProps})=>(
 
        <button  
        className={`custom-button ${isGoogleSignIn?'google':''} ${inverted?'inverted':''}`} 
         {...otherProps}>
           {children}
        </button>

)

export default CustomButton;