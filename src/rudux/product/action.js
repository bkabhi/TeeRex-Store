import { GET_PRODUCTS_ERROR, GET_PRODUCTS_PENDING, GET_PRODUCTS_SUCCESS } from "./actionType"

const baseUrl = 'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json';

export const getProductsPending = ()=>{
    return {
        type: GET_PRODUCTS_PENDING
    }
}

export const getProductsSuccess = (payload)=>{
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload
    }
}

export const getProductsError = ()=>{
    return {
        type: GET_PRODUCTS_ERROR
    }
}

export const getProducts = () => async (dispatch)=>{
    dispatch(getProductsPending());
    try {
        const res = await fetch(baseUrl);
        const res2 = await res.json();
        // console.log(res2);
        dispatch(getProductsSuccess(res2));
    } catch (error) {
        console.log(error, " error ");
        dispatch(getProductsError());
    }
}