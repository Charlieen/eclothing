import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.style.scss';
import { auth, createUserProfileDocument } from '../../firebase/firebase.util';
import { signUpStart }from '../../redux/user/user.action';
import {connect} from 'react-redux';

class SignUp extends Component {

    constructor(props){
        super(props);
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit= async (event)=>{
    
    event.preventDefault();
    
    const { displayName,email,password,confirmPassword } = this.state;

       if(password !== confirmPassword){
            alert("passwords don't match");
            return;
       }
       try {
        //    const {user} = await auth.createUserWithEmailAndPassword(email,password);
        //    debugger;
        //    await createUserProfileDocument(user,{displayName});
            this.props.signUpStart({email,password});

           this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
           })

           
       } catch (error) {
           console.log(error);
       }
    }

    handleChange= event =>{
        const{name,value} = event.target;
        this.setState({[name]:value});
    }


    render() {
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                
                <form  className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput
                handleChange={this.handleChange}
                 name="displayName"
                 type="text"
                 value={this.state.displayName} 
                 label="DisplayName"
                 required />

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
                    <FormInput
                    handleChange={this.handleChange}
                    name="confirmPassword" 
                    type="password" 
                    value={this.state.confirmPassword} 
                    label="ConfirmPassword"
                    required />
                    <div className="buttons">
                        <CustomButton type='submit'>
                            Sign Up
                        </CustomButton>
                    </div>
               
                </form>
            </div>
        )
    }
}

export default connect(null,{signUpStart}) (SignUp);