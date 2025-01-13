import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./cart/cart.reducer";
import { filterReducer } from "./filter/filter.reducer";
import { pageReducer } from "./paginate/pagination.reducer";
const rootReducer = combineReducers({
  cart: cartReducer,
  products: filterReducer,
  page: pageReducer,
  // abc: fjs,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
