import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.style.scss';
import { signInWithGoogle ,auth } from '../../firebase/firebase.util';

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit=  (event)=>{
        event.preventDefault();
        const {email,password} = this.state;
        auth.signInWithEmailAndPassword(email,password)
        .then(()=>{
            this.setState({email:'',password:''});
            this.props.history.push('/');
        })
        .catch(e=>console.log(e));
    
    }

    handleChange= event =>{
        const{name,value} = event.target;
        this.setState({[name]:value});
    }

    handleGoogleSignIn = ()=>{

        signInWithGoogle()
        .then(res => {
            this.props.history.push('/');
        })
        .catch(e=>console.error(e.code))
    }


    render() {
        return (
            <div className="sign-in">
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
                    <div className="buttons">
                        <CustomButton type='submit'>
                            Sign In
                        </CustomButton>
                        <CustomButton isGoogleSignIn  onClick={this.handleGoogleSignIn} >
                            Sign In with Google 
                        </CustomButton>
                    </div>
               
                </form>
            </div>
        )
    }
}

export default SignIn;