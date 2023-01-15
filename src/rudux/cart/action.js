import { ADD_CART_PRODUCT, DELETE_CART_PRODUCT, UPDATE_CART_PRODUCT } from "./actionType"

export const addCartProducts = (payload)=>{
    return {
        type: ADD_CART_PRODUCT,
        payload
    }
}

export const deleteCartProducts = (payload)=>{
    return {
        type: DELETE_CART_PRODUCT,
        payload
    }
}

export const updateCartProducts = (payload)=>{
    return {
        type: UPDATE_CART_PRODUCT,
        payload
    }
}