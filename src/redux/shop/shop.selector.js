import { createSelector } from 'reselect';

const COLLECTION_ID_MAP ={
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
}

const selectShopItems = state => state.shop;

export const selectedShopItems = createSelector(
    [selectShopItems],
     shop => shop.shopItems
)

export const selectedCollection = collectionUrlParam => 
createSelector(
    [selectShopItems],
    collections => collections.shopItems.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
)