import { ShopActionsDIC }from './shop.types';

export const initialShopItem = (items)=>({
    type:ShopActionsDIC.INT_SHOP_ITEMS,
    payload:items
})

export const addItemToCart = item => ({
    type:ShopActionsDIC.ADD_ITEM_TO_CART,
    payload:item
})

export const getAllItems = ()=>({
    type:ShopActionsDIC.GET_ALL_ITEMS
})
export const getQuickView = ()=>({
    type:ShopActionsDIC.GET_QUICK_VIEW
})
