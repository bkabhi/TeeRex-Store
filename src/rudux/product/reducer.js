import { GET_PRODUCTS_ERROR, GET_PRODUCTS_PENDING, GET_PRODUCTS_SUCCESS } from "./actionType";

let initialState = {
    isPending: false,
    isError: false,
    products: []
}

export const productReducer = (store=initialState, action) =>{
    switch (action.type) {
        case GET_PRODUCTS_PENDING:
            return { isPending: true, isError: false, products: [] }
        case GET_PRODUCTS_SUCCESS:
            return { isPending: false, isError: false, products: action.payload }
        case GET_PRODUCTS_ERROR:
            return { isPending: false, isError: true, products: [] }
        default:
            return store;
    }
}