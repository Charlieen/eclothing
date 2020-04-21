import { ShopActionsDIC } from './shop.types';
import SHOP_DATA  from '../../data/shop.data';

const initialShop ={
    shopItems:SHOP_DATA,
    routeName:'',
    quickView:false,
    cartItems:[],
    cCurrentItem:null,
    cItemsCount:0,
    cTotalPrice:0
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

 const shopReducer = (state = initialShop , action) => {
    switch (action.type) {
        case ShopActionsDIC.INT_SHOP_ITEMS:
            return state;
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
            cartItems:[...state.cartItems,{...action.payload,count:1,inCart:true}],
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