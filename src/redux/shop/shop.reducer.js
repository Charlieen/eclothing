import { ShopActionsDIC } from './shop.types';
import SHOP_DATA  from '../../data/shop.data.normalization';

const initialShop ={
    shopItems:null,
    isLoading:true

}
const _updateShopItems = (shopItems,action)=>{

   const categroy = shopItems.find(item => item.routeName === action.payload.routeName);
   const items = categroy.items.map(item=> {
        if(item.id === action.payload.id){
            return {
                ...item,
                count:1,
                inCart:true
            }
        }else {
            return {
                ...item
            }
        }
    });
   return {...categroy,items:items};
}

const _updateCartItems = (cartItems,item)=>{
    debugger;
    let result;
    const exist = cartItems.filter(i => i.id === item.id).length === 1;

    if(exist){
        result = cartItems.map(i =>{
            if(i.id === item.id) {
                return {...i,count:i.count+1}
            }else return i;
        });
    }else {
        result = [...cartItems,{...item,count:1,inCart:true}];
    }

    return result;
}

 const shopReducer = (state = initialShop , action) => {
    switch (action.type) {
        case ShopActionsDIC.INT_SHOP_ITEMS:
            return {...state,shopItems:action.payload,isLoading:false};

        case ShopActionsDIC.GET_QUICK_VIEW:
            return {...state,
                quickView: ! state.quickView
            }    

        case ShopActionsDIC.ADD_ITEM_TO_CART: 
        return {
            ...state,
            shopItems: state.shopItems.map(categroy=> {
                if(categroy.routeName === action.payload.routeName){
                    return _updateShopItems(state.shopItems,action);
                }else return categroy

            }),
            cartItems:_updateCartItems(state.cartItems,action.payload),
            cItemsCount:state.cItemsCount +1,
            cTotalPrice: state.cTotalPrice + action.payload.price
        }
        case ShopActionsDIC.GET_ALL_ITEMS:
            return state;
    
        default:
            return state;
    }
}

export default shopReducer;