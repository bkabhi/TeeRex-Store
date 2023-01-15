import { GET_CART_PRODUCT } from "./actionType"

export const getCartProducts = (payload)=>{
    return {
        type: GET_CART_PRODUCT,
        payload
    }
}
