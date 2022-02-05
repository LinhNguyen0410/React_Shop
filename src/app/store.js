import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/Auth/userSlice";
import cartReducer from "../feature/Cart/cartSlice";

const rootReducer = {
  user: userReducer,
  cart: cartReducer,
};
// rootReducer sẽ bao gồm tất cả reducer mà mình có nhá

const store = configureStore({
  reducer: rootReducer,
});
export default store;
