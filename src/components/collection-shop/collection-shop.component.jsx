import React from 'react';
import './collection-shop.style.scss'
import  CollectionItem from '../collection-item/collection-item.component';
import {connect} from 'react-redux';
import { createStructuredSelector }from 'reselect'; 
import { selectedShopItems} from '../../redux/shop/shop.selector';


const CollectionShop  =({shopItems,match})=>  {

        const title = match.params.category
        const items = shopItems.find(x=>x.routeName === title);
   
    return(
       <div className="collection-preview">
        <h1>{title.toUpperCase()}</h1>
        <div className="preview">
            {items.items.map((item)=>
            (<CollectionItem  item={item} />))}
        </div>
        </div>
    )
}     
               

const mapStateToProps = createStructuredSelector({
    shopItems:selectedShopItems
})
    

export default connect(mapStateToProps)(CollectionShop);