import React  from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import { connect} from 'react-redux';
import { Route ,Switch }from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectedShopItems }from '../../redux/shop/shop.selector';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import  firebase,{convertCollectionsSnapshotToMap} from '../../firebase/firebase.util';
import {initialShopItem}from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

//          
 class ShopPage extends React.Component{

   state={loading:true}
     
   unsubscribeCollectionSnapshot=null;

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

      const collcectionRef = firebase.firestore().collection('collections');
      // https://firestore.googleapis.com/v1/projects/eclothing-9c86a/databases/(default)/documents/cities/LA

      //: 1 firebase api onSnapshot:
       this.unsubscribeCollectionSnapshot =collcectionRef.onSnapshot(async snapshot => {
       // const result = await snapshot.docs.map(doc=> ({...doc.data(),id:doc.id}));
       const result = convertCollectionsSnapshotToMap(snapshot);
          console.log(result);
          const resultObject = this.changeArrayToObject(result);

        this.props.initialShopItem(resultObject);
        this.setState({loading:false});
      });

      //: 2 firebase api promise version:

      // collcectionRef.get().then(snapshot=>{

      // })
      //: 3 RESTful api  by fetch

     


   }
   componentWillUnmount(){
      this.unsubscribeCollectionSnapshot();
   }

  
   
    render() {

      const {match} = this.props;
      const {loading} = this.state;

      const WithSpinnerCollecitonOverview = WithSpinner(CollectionOverview);

      return ( <div className="shop-page">
               <Route exact path={`${match.path}`} 
               render={(props)=> <WithSpinnerCollecitonOverview isLoading={loading} {...props}/> }/> 
               <Route   path={`${match.path}/:categoryId`} component={CollectionPage}/>
               </div>
            )
    }

 }
    

 
 




export default connect(null,{initialShopItem}) (ShopPage);


