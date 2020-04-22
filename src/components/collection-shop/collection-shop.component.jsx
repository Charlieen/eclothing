import React from 'react';
import './collection-shop.style.scss'
import  CollectionItem from '../collection-item/collection-item.component';
import {connect} from 'react-redux';


class CollectionShop  extends React.Component {

    render(){
        const title = this.props.match.params.category
        const items = this.props.shopItems.find(x=>x.routeName === title);
    
            if(title && items){
                return (
                    <div className="collection-preview">
                    <h1>{title.toUpperCase()}</h1>
                    <div className="preview">
                        {items.items.map((item)=>
                        (<CollectionItem  item={item} />))}
                    </div>
                    </div>
                );
            }else{
                return (<div></div>)
            }         
        
    }
}

const mapStateToProps = state => ({
    shopItems:state.shop.shopItems
})

export default connect(mapStateToProps)(CollectionShop);