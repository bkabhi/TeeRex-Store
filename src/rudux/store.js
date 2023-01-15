import { legacy_createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { cartReducer } from './cart/reducer';
import { productReducer } from './product/reducer';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    Products: productReducer,
    Cart: cartReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))