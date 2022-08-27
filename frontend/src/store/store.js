
import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./cart/cart.reducer";
import { filterReducer } from "./filter/filter.reducer";
const rootReducer = combineReducers({
    cart: cartReducer,
    products : filterReducer
})

export const store = legacy_createStore( rootReducer, applyMiddleware(thunk));
