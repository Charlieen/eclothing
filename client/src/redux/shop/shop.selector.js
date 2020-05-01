import { createSelector } from 'reselect';
/**
 * Data normalization is that all it is what you store lists of elements as object instead of arrays
 */
// const COLLECTION_ID_MAP ={
//     hats:1,
//     sneakers:2,
//     jackets:3,
//     womens:4,
//     mens:5
// }

const selectShopItems = state => state.shop;

export const selectedShopItems = createSelector(
    [selectShopItems],
     shop => shop.shopItems
)

const _mapObjectToArray = (shopItems) => {
   // debugger;
    let result =[];
    const keys = Object.keys(shopItems);
   // keys.forEach(key=> {console.log(shopItems[key])});
        keys.forEach(key => result.push(shopItems[key]));
        return result;
}
export const selectedShopItemsIsLoading = createSelector(
    [selectShopItems],
    shop => shop.isLoading
)

export const selectedShopItemsForArray = createSelector(
    [selectShopItems],
     shop => shop.shopItems ? _mapObjectToArray(shop.shopItems):[]
)


// export const selectedCollection = collectionUrlParam => 
// createSelector(
//     [selectShopItems],
//     collections => collections.shopItems.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
// )

export const selectedCollection = collectionUrlParam => 
createSelector(
    [selectShopItems],
    collections => {
     //   console.log(collections);
      return  collections.shopItems? collections.shopItems[collectionUrlParam]:{};
    }
)

export const selectIsCollectionLoaded = createSelector(
   [selectShopItems],
    shop => !!shop.shopItems

)