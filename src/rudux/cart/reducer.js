import { ADD_CART_PRODUCT, DELETE_CART_PRODUCT, UPDATE_CART_PRODUCT } from "./actionType";

let initialState = {
    cart:[],
    totalProducts: 0,
    totalPrice: 0,
}

export const cartReducer = (store=initialState, action)=>{
    switch (action.type) {
        case ADD_CART_PRODUCT:
            return {
                cart: [...store.cart, action.payload], 
                totalProducts: store.totalProducts+1,
                totalPrice: store.totalPrice+action.payload.price
            };
        case DELETE_CART_PRODUCT:
            const data = store.cart.filter(item=>item.id!==action.payload);
            return {
                cart: data,
                totalProducts: data.reduce((prev, curr)=>prev+curr.cartQuantity,0),
                totalPrice: data.reduce((accumulator, {price,cartQuantity})=>accumulator+(price*cartQuantity), 0)
            };
        case UPDATE_CART_PRODUCT:
            const updated = store.cart.map(item=>item.id===action.payload.item.id?{...item, cartQuantity: item.cartQuantity+action.payload.val}:item)
            return { ...store, 
                cart: updated,
                totalProducts: store.totalProducts+action.payload.val,
                totalPrice: action.payload.val>0?store.totalPrice+action.payload.item.price:store.totalPrice-action.payload.item.price
            };
        default:
            return store;
    }
}