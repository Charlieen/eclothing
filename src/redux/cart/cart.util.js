export const  addItemToCart = (cartItems,cartItemToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);
    if(existingCartItem){
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ?
             {...cartItem, count:cartItem.count +1 }:cartItem)
    }else{
        return [...cartItems,{...cartItemToAdd, count:1}];
    }
}