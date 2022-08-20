import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
import directoryReducer from "./directory/directory";
import shopReducer from "./shop/shop";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

export default persistReducer(persistConfig, rootReducer);
