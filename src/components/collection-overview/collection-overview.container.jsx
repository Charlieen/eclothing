import React from 'react';
import {connect} from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector }from 'reselect';
import { selectedShopItemsIsLoading} from '../../redux/shop/shop.selector';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionOverview from './collection-overview.component'; 

// const CollectionContainer = (ContaineredComponent) =>({otherProps})=> {
       
//         const mapStateToProps = createStructuredSelector({
//                  collectionIsLoaded:selectedShopItemsIsLoading
//           });
//         const WithSpinnerWappedComponent =  WithSpinner(connect(mapStateToProps)(ContaineredComponent));
//         console.log(otherProps);
//         return <WithSpinnerWappedComponent otherProps={otherProps}/>
// }   
// export default CollectionContainer;

const mapStateToProps =  createStructuredSelector({
        isLoading:selectedShopItemsIsLoading
});

//const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview));

export const CollectionOverviewContainer = compose(
        connect(mapStateToProps),
        WithSpinner)
        (CollectionOverview);

export default CollectionOverviewContainer;

