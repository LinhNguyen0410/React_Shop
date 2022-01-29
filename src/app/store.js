import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/Auth/userSlice";

const rootReducer = {
  user: userReducer,
};
// rootReducer sẽ bao gồm tất cả reducer mà mình có nhá

const store = configureStore({
  reducer: rootReducer,
});
export default store;
