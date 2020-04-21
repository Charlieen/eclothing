import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import { connect} from 'react-redux';
import { initialShopItem} from '../../redux/shop/shop.actions';
 
 class ShopPage extends Component {

    componentDidMount(){
        this.props.initialShopItem();
    }

    render() {
        console.log('props',this.props);
        return (
            this.props.collections? (
                <div>
                {this.props.collections.map(({id, ...otherProps}) => (<CollectionPreview key={id} {...otherProps}/>))}
              </div>
            ):(<div>loading...</div>)
           
        )
    }
}

const mapStateToProps =(state)=>({
    collections:state.shop.shopItems
})

export default connect(mapStateToProps,{initialShopItem})(ShopPage);


