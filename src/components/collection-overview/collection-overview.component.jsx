import React from 'react';
import './collection-overview.styles.scss';
import {connect} from 'react-redux';
import { createStructuredSelector }from 'reselect';
import { selectedShopItemsForArray } from '../../redux/shop/shop.selector';
import CollectionPreview from '../../components/collection-preview/collection-preview';

const CollectionOverview =({shopItems,match})=>{
    // const routeName = match.params.category;
    // const category= shopItems.find(c =>c.routeName === routeName);
  //  console.log(shopItems);
    return(
    <div className="collection-overview">
        { shopItems.map( ({id, ...otherProps}) => (<CollectionPreview key={id} {...otherProps}/>))}
    </div>
    )
}

const mapStateToProps = createStructuredSelector({
    shopItems: selectedShopItemsForArray
})

export default connect(mapStateToProps)(CollectionOverview);