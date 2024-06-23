import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { ProductListReducer ,ProductDetailReducer} from "./Reducer/ProductReducer"
import { cartReducer } from "./Reducer/CartReducer"
import {BlogListReducer, BlogDetailReducer} from "./Reducer/BlogReducer"



const reducer = combineReducers({
    productList : ProductListReducer,
    productDetail : ProductDetailReducer,
    cart : cartReducer,
    BlogList : BlogListReducer,
    BlogDetail : BlogDetailReducer,
})


const cartItemsFromLocalStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const initialState = {
  cart: { cartItems: cartItemsFromLocalStorage },
}

const middleware = [thunk]

const store = createStore(reducer, initialState, applyMiddleware(...middleware))

export default store
