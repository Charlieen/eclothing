import React from 'react';
import './App.css';
import {Route , Switch, Redirect  }from 'react-router-dom';

import HomePage from './pages/homepage/homepage.compoent';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import CheckOutPage from './pages/checkout/checkout.component';
import  CollectionShop  from './components/collection-shop/collection-shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';

//Redux
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector} from 'reselect';
// some demo


class App extends React.Component{


  unsubscribeFromAuth =null;

  componentDidMount(){
    const{ setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(

      async userAuth =>{
        if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);     
           userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
            });
          })
        }else{
          setCurrentUser(userAuth);
        }
      },
      error =>{
        console.log(error);
      }
    )    
  }

  handleSignOut =()=> {

      auth.signOut()
      .then(()=>{
        this.props.setCurrentUser(null);
        console.log('success log out');
      })
      .catch(e=>console.error(e));

  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    //console.log(this.state.currentUser);
    return (
      <div>   
      <Header handleSignOut={this.handleSignOut}/>
      <Switch>
      <Route exact  path='/' component={HomePage}/>
      <Route exact  path='/shop' component={ShopPage}/>
      <Route exact  path='/shop/:category' component={CollectionShop}/>
      <Route exact path='/signin' 
        render={()=> this.props.currentUser ? (<Redirect to='/'/>):(<SignInAndSignUpPage/>)}
      />
      <Route exact  path='/checkout' component={CheckOutPage}/>
      </Switch>
      </div>
    )
  }
} 

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
})


const mapActionToProps = {setCurrentUser}

export default connect(mapStateToProps, mapActionToProps) (App);
