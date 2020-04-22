export const  addItemToCart = (cartItems,cartItemToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);
    if(existingCartItem){
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ?
             {...cartItem, count:cartItem.count +1 }:cartItem)
    }else{
        return [...cartItems,{...cartItemToAdd, count:1}];
    }
}

export const _addItem_groupWay = (item,state) =>{
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
