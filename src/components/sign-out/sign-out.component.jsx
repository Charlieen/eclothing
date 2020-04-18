import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.style.scss';
import { signInWithGoogle } from '../../firebase/firebase.util';

class SignOut extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit= (event)=>{
        event.preventDefault();
        console.log(this.state);
    }
    handleChange= event =>{
        const{name,value} = event.target;
        this.setState({[name]:value});
    }

    handleGoogleSignIn = ()=>{

        signInWithGoogle()
        .then(res =>
            console.log(res.credential.idToken)
            )
        .catch(e=>console.error(e.code))
    }

    render() {
        return (
            <div className="sign-out">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                
                <form onSubmit={this.handleSubmit}>
              
                <FormInput
                    handleChange={this.handleChange}
                     name="email"
                     type="email"
                     value={this.state.email} 
                     label="Email"
                     required />
                    <FormInput
                    handleChange={this.handleChange}
                    name="password" 
                    type="password" 
                    value={this.state.password} 
                    label="Password"
                    required />
                    <CustomButton type='submit'>
                        Sign In
                    </CustomButton>
                   <CustomButton onClick={this.handleGoogleSignIn} >
                       SignIn with Google 
                   </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignOut;