import { ShopActionsDIC } from './shop.types';
import SHOP_DATA  from '../../data/shop.data.normalization';

const initialShop ={
    shopItems:null,
    isLoading:false,
    errorMessage:undefined

}


 const shopReducer = (state = initialShop , action) => {
    switch (action.type) {
        case ShopActionsDIC.FETCH_COLLECTIONS_START:
            return {...state,isLoading:true};
        case ShopActionsDIC.FETCH_COLLECTIONS_SUCCESS:
            return {...state,shopItems:action.payload,isLoading:false};
        case ShopActionsDIC.FETCH_COLLECTIONS_FAILURE:
            return {...state,errorMessage:action.payload}
        default:
            return state;
    }
}

export default shopReducer;