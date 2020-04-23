import CartActionTypes from './cart.types';

export  const toggleCartHidden = ()=> ({
    type:CartActionTypes.TOGGLE_CART_HIDDEN
})


export const addItem = item => ({
    type:CartActionTypes.ADD_ITEM,
    payload:item
})

export const getItems = ()=>({
    type:CartActionTypes.GET_ITEMS
})
export const increaseCount = item =>({
    type:CartActionTypes.INCREASE_COUNT,
    payload:item
})

export const decreaseCount = item =>({
    type:CartActionTypes.DECREASE_COUNT,
    payload:item
})
export const removeItem = item =>({
    type:CartActionTypes.REMOVE_ITEM,
    payload:item
})