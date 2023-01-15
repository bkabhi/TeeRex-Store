import { GET_CART_PRODUCT } from "./actionType";

let initialState = {
    cart:[]
}

export const cartReducer = (store=initialState, action)=>{
    switch (action.type) {
        case GET_CART_PRODUCT:
            return { cart: action.payload };
        default:
            return store;
    }
}