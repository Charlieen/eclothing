import React  from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import { connect} from 'react-redux';
import { Route ,Switch }from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectedShopItems }from '../../redux/shop/shop.selector';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

//          
 const ShopPage = ({match}) => {
        
    return ( <div className="shop-page">
             <Route exact path={`${match.path}`} component={CollectionOverview}/> 
               <Route   path={`${match.path}/:categoryId`} component={CollectionPage}/>
    </div>
    )
 }
 
 




export default ShopPage;


