import CartActionTypes from './cart.types';
import { addItemToCart ,increaseCount,decreaseCount,removeItem} from './cart.util';

const INITIAL_STATE ={
    hidden:true,
    cartItems:[]
};


const cartReducer = (state= INITIAL_STATE , action) =>{
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.GET_ITEMS:
            return state;    
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems,action.payload)
            }
        case CartActionTypes.INCREASE_COUNT:
            return{
                ...state,
                cartItems: increaseCount(state.cartItems,action.payload)
            }        
        case CartActionTypes.DECREASE_COUNT:
            return{
                    ...state,
                    cartItems: decreaseCount(state.cartItems,action.payload)
                } 
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItem(state.cartItems,action.payload)
            }        
        default:
            return state;
    }
}

export default cartReducer;