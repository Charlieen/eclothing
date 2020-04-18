import React from 'react';

import './sign-in-and-sign-up.style.scss';

import SignIn from '../../components/sign-in/sign-in.component';

const SignInAndSignUpPage =(props)=>(
    <div className="sign-in-and-sign-up">
        <SignIn history={props.history} />
    </div>
)

export default SignInAndSignUpPage;