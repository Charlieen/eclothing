import CartActionTypes from './cart.types';

const INITIAL_STATE ={
    hidden:true,
    cartItems:[]
};
const _addItem_groupWay = (item,state) =>{
    debugger;
    const itemExist = state.cartItems.find(i =>i.id === item.id);

    let itemUpdate = itemExist ? {...itemExist, count: itemExist.count +1}:{...item,count:1};
    
    if(itemExist){
        return  state.cartItems.map(item =>{
            if(item.id === itemUpdate.id){
                return {...item,count:itemUpdate.count}
            }else {
                return item;
            }
        });
    }else {
        return [...state.cartItems,itemUpdate];
    }


}


const cartReducer = (state= INITIAL_STATE , action) =>{
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: _addItem_groupWay(action.payload,state)
            }    
    
        default:
            return state;
    }
}

export default cartReducer;