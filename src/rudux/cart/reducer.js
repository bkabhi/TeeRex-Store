import { ADD_CART_PRODUCT, DELETE_CART_PRODUCT, UPDATE_CART_PRODUCT } from "./actionType";

let initialState = {
    cart: [],
    totalProducts: 0,
    totalPrice: 0,
}

export const cartReducer = (store = initialState, action) => {
    switch (action.type) {
        case ADD_CART_PRODUCT:
            let cartData = addtoCart(store.cart, action.payload)
            return {
                cart: cartData,
                totalProducts: getTotalProducts(cartData),
                totalPrice: getTotalCartPrice(cartData)
            };
        case DELETE_CART_PRODUCT:
            const data = store.cart.filter(item => item.id !== action.payload);
            return {
                cart: data,
                totalProducts: getTotalProducts(data),
                totalPrice: getTotalCartPrice(data)
            };
        case UPDATE_CART_PRODUCT:
            const updated = getUpdatedCartProducts(store.cart, action.payload);
            return {
                cart: updated,
                totalProducts: getTotalProducts(updated),
                totalPrice: getTotalCartPrice(updated)
            };
        default:
            return store;
    }
}


// add item in cart and update cart quantity
const addtoCart = (data, payload) => {
    let flag = false
    var cartData = data.map(ele => {
        if (ele.id === payload.id) {
            flag = true;
            if (ele.cartQuantity >= ele.quantity) {
                alert("out of stock");
                return ele;
            }
            return { ...ele, cartQuantity: ele.cartQuantity + 1 }
        } else {
            return ele;
        }
    })
    if (!flag) {
        cartData = [...data, payload]
    }
    return cartData;
}

// get all items in cart
const getTotalProducts = (cartData)=>{
    return cartData.reduce((prev, curr) => prev + curr.cartQuantity, 0)
}

// get total cart price
const getTotalCartPrice = (cartData)=>{
    return cartData.reduce((prev, { price, cartQuantity }) => prev + (price * cartQuantity), 0)
}

// get update cart Product quantity 
const getUpdatedCartProducts = (data, payload)=>{
    const cartData = data.map(item =>
        item.id === payload.id ? { ...item, cartQuantity: item.cartQuantity + payload.val } : item
    )
    return cartData;
}