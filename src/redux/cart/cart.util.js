export const  addItemToCart = (cartItems,cartItemToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);
    if(existingCartItem){
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ?
             {...cartItem, count:cartItem.count +1 }:cartItem)
    }else{
        return [...cartItems,{...cartItemToAdd, count:1}];
    }
}

export const increaseCount = (cartItems, item) => {
    return cartItems.map(cartItem => 
        cartItem.id === item.id ? {...cartItem,count:cartItem.count+1}: cartItem)

}

export const decreaseCount = (cartItems, item) =>{
    return cartItems.map(cartItem => 
        cartItem.id === item.id ? {...cartItem,count:
            (cartItem.count- 1)>=0 ? cartItem.count- 1 : 0 }: cartItem).filter(item =>item.count >0)
}

export const removeItem = (cartItems,item) => {
    const result = cartItems.filter(i=> i.id !==  item.id);
    console.log(result);
    return result;
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
