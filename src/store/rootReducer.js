import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import productListReducer from "./reducers/productsReducers/productListReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productListReducer,
});

export default rootReducer;
