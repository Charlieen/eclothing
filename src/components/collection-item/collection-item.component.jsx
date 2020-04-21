import React from 'react';
import './collection-item.style.scss';
import {connect} from 'react-redux';
import { addItemToCart } from '../../redux/shop/shop.actions';
import CustomButton from '../custom-button/custom-button.component';


class CollectionItem extends React.Component{

    _getCurrentItem =()=>{
        const id= this.props.id; 
        const routeName= this.props.routeName;
        const categoryItems = this.props.shop.shopItems.filter(item =>item.routeName === routeName);
        const item =categoryItems[0].items.find(item=> item.id === id);

        return item;

    }
    addToCart = ()=>{
        
        const routeName= this.props.routeName;
        const item = this._getCurrentItem();
        if(item.inCart){
            return;
        }else{
            this.props.addItemToCart({...item,routeName});
        }
    }

    render(){
        const {name,price,imageUrl} = this.props;
        const item = this._getCurrentItem();
        return (
            <div className="collection-item" onClick={this.addToCart} >
            
            <div className="image"
                style={{backgroundImage:`url(${imageUrl})`}}
            >
                <div className="content"> 
                {
                 item.inCart ? (<span className="title">InCart</span>):
                 (<span className="title">Add to Cart</span>)
                }
                
                </div>
            </div>

            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
          </div>

        );
    }
}
const mapStateToProps = state => ({
    shop:state.shop
})

export default connect(mapStateToProps,{addItemToCart })(CollectionItem);
