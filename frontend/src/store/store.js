
import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./cart/cart.reducer";

const rootReducer = combineReducers({
    cart:cartReducer
})

export const store = legacy_createStore( rootReducer, applyMiddleware(thunk));