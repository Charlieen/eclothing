import React from 'react';
import './App.css';
import {Route , Switch }from 'react-router-dom';

import HomePage from './pages/homepage/homepage.compoent';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.util';
// some demo


class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      currentUser:null
    }

  }

  unsubscribeFromAuth =null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
       user =>{
         this.setState({currentUser:user});
        console.log(user);
      },
      error =>{
        console.log(error);
      }
    )    
  }

  handleSignOut =()=> {

      auth.signOut()
      .then(()=>{console.log('success log out')})
      .catch(e=>console.error(e));

  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div>   
      <Header currentUser={this.state.currentUser} handleSignOut={this.handleSignOut}/>
      <Switch>
      <Route exact  path='/' component={HomePage}/>
      <Route exact  path='/shop' component={ShopPage}/>
      <Route exact path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
      </div>
    )
  }
} 

export default App;
