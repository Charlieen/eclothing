import React,{ useEffect} from 'react';
import './App.css';
import {Route , Switch, Redirect  }from 'react-router-dom';

import HomePage from './pages/homepage/homepage.compoent';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import CheckOutPage from './pages/checkout/checkout.component';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

//Redux
import { connect } from 'react-redux';
import { checkUserSession } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector} from 'reselect';


import {fetchCollectionsStart } from './redux/shop/shop.actions';
import CollectionPageContainer from './pages/collection/collection.container';

//use useEffect hooks

const App = ({currentUser,fetchCollectionsStart ,checkUserSession })=> {

  useEffect(() => {

    fetchCollectionsStart();
    checkUserSession();

  }, [checkUserSession]);

  return (
    <div>   
    <Header/>
    <Switch>
    <Route exact  path='/' component={HomePage}/>
    <Route exact  path='/shop' component={ShopPage}/>
    <Route exact  path='/shop/:categoryId' 
    render = { (props)=> {
      return  <CollectionPageContainer otherProps={props} />
     }}/>
    <Route exact path='/signin' 
      render={()=> currentUser ? (<Redirect to='/'/>):(<SignInAndSignUpPage/>)}
    />
    <Route exact  path='/checkout' component={CheckOutPage}/>
    </Switch>
    </div>
  )

}


// class App extends React.Component{
//   componentDidMount(){
//     const{ shopItemsArray,checkUserSession} = this.props;

    
//     // this.unsubscribeFromAuth = auth.onAuthStateChanged(

//     //   async userAuth =>{
//     //     if(userAuth){
//     //       const userRef = await createUserProfileDocument(userAuth);     
//     //        userRef.onSnapshot(snapShot => {
//     //         setCurrentUser({
//     //           id:snapShot.id,
//     //           ...snapShot.data()
//     //         });
//     //       })
//     //     }else{
//     //       setCurrentUser(userAuth);
//     //     //  addCollectionAndDocuments('collections',shopItemsArray.map(({title,items})=>({title,items})));
//     //     }
//     //   },
//     //   error =>{
//     //     console.log(error);
//     //   }
//     // );
    
//   //   const collcectionRef = firebase.firestore().collection('collections');

//   //   this.unsubscribeCollectionSnapshot = collcectionRef.onSnapshot(async snapshot => {
//   //   // const result = await snapshot.docs.map(doc=> ({...doc.data(),id:doc.id}));
//   //    const result = await convertCollectionsSnapshotToMap(snapshot);
//   //      console.log(result);
//   //      const resultObject = this.changeArrayToObject(result);

//   //     this.props.initialShopItem(resultObject);

//   //  }  );
//       this.props.fetchCollectionsStart();
//       checkUserSession();
//   //this.props.fetchCollectionsStartAsync();

//   }

//   handleSignOut =()=> {

//       // auth.signOut()
//       // .then(()=>{
//       //   this.props.setCurrentUser(null);
//       //   console.log('success log out');
//       // })
//       // .catch(e=>console.error(e));

//   }


//   //<WithSpinnerCollectionPage isLoading={!collectionIsLoad} otherProps={props} />
//   render(){
//     //console.log(this.state.currentUser);
//     //      <Route exact  path='/shop/:category' component={CollectionShop}/> 
//     // const WithSpinnerCollectionPage = WithSpinner(CollectionPage);
//     const WithSpinnerCollectionPage = WithSpinner(CollectionPage);



//       const {isLoading,currentUser,collectionIsLoad} = this.props;
//     return (
//       <div>   
//       <Header handleSignOut={this.handleSignOut}/>
//       <Switch>
//       <Route exact  path='/' component={HomePage}/>
//       <Route exact  path='/shop' component={ShopPage}/>
     
//       <Route exact  path='/shop/:categoryId' 
//       render = { (props)=> {
//         console.log('props:  ',props);
      
//         return  <CollectionPageContainer otherProps={props} />
//        }}/>



//       <Route exact path='/signin' 
//         render={()=> currentUser ? (<Redirect to='/'/>):(<SignInAndSignUpPage/>)}
//       />
//       <Route exact  path='/checkout' component={CheckOutPage}/>
//       </Switch>
//       </div>
//     )
//   }
// } 

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
})


const mapActionToProps = {checkUserSession,fetchCollectionsStart };

export default connect(mapStateToProps, mapActionToProps) (App);
