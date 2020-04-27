import React from 'react';
import './App.css';
import {Route , Switch, Redirect  }from 'react-router-dom';

import HomePage from './pages/homepage/homepage.compoent';
import ShopPage from './pages/shop/shop.component';
import CollectionPage from './pages/collection/collection.component'
import Header from './components/header/header.component';
import CheckOutPage from './pages/checkout/checkout.component';
import  CollectionShop  from './components/collection-shop/collection-shop.component';
import CollectionOverview from './components/collection-overview/collection-overview.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import  firebase,{ auth, createUserProfileDocument ,addCollectionAndDocuments,convertCollectionsSnapshotToMap } from './firebase/firebase.util';

//Redux
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector} from 'reselect';
import { selectedShopItemsForArray ,selectedShopItemsIsLoading }from './redux/shop/shop.selector';
import WithSpinner from './components/with-spinner/with-spinner.component';
import {initialShopItem }from './redux/shop/shop.actions';
// some demo


class App extends React.Component{


  unsubscribeFromAuth =null;
  //unsubscribeCollectionSnapshot=null;

  changeArrayToObject=(shopItems)=> {
     
    const test= shopItems.reduce((result,item) => ({...result,[`${item.routeName}`]:item }),{});

    const test2 = shopItems.reduce((acc,collection)=> {
       acc[collection.title.toLowerCase()]= collection;
       return acc;
    },{})

    console.log(test);
    return test;
 }


  componentDidMount(){
    const{ shopItemsArray,setCurrentUser} = this.props;

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
        //  addCollectionAndDocuments('collections',shopItemsArray.map(({title,items})=>({title,items})));
        }
      },
      error =>{
        console.log(error);
      }
    );
    
  //   const collcectionRef = firebase.firestore().collection('collections');

  //   this.unsubscribeCollectionSnapshot = collcectionRef.onSnapshot(async snapshot => {
  //   // const result = await snapshot.docs.map(doc=> ({...doc.data(),id:doc.id}));
  //    const result = await convertCollectionsSnapshotToMap(snapshot);
  //      console.log(result);
  //      const resultObject = this.changeArrayToObject(result);

  //     this.props.initialShopItem(resultObject);

  //  }  );

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
  //  this.unsubscribeCollectionSnapshot();
  }


  render(){
    //console.log(this.state.currentUser);
    //      <Route exact  path='/shop/:category' component={CollectionShop}/> 
    // const WithSpinnerCollectionPage = WithSpinner(CollectionPage);

    return (
      <div>   
      <Header handleSignOut={this.handleSignOut}/>
      <Switch>
      <Route exact  path='/' component={HomePage}/>
      <Route exact  path='/shop' component={ShopPage}/>
      <Route exact  path='/shop/:categoryId' component={CollectionPage}/>
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
  currentUser:selectCurrentUser,
  shopItemsArray:selectedShopItemsForArray,
  isLoading: selectedShopItemsIsLoading

})


const mapActionToProps = {setCurrentUser ,initialShopItem}

export default connect(mapStateToProps, mapActionToProps) (App);
