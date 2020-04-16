import React, { Component } from 'react';
import SHOP_DATA from '../../data/shop.data';
import {CollectionPreview} from '../../components/collection-preview/collection-preview';

export default class ShopPage extends Component {
    constructor(){
        super();
        this.state={
            collections:SHOP_DATA
        }
    }
    render() {
        const{collections}= this.state;
        return (
            <div>
              {collections.map(c => (<CollectionPreview key={c.id} title ={c.title} items={c.items}/>))}
            </div>
        )
    }
}
