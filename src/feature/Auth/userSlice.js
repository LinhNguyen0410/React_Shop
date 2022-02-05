import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../Api/userApi";
import { KEYS } from "../../constant/storageKeys";

//  action register
export const registerAction = createAsyncThunk(
  "users/register",
  async (user_payload, thunkAPI) => {
    // user_payload is info user enter at form , truyền nó làm data cho api để gửi lên sv

    // call api to register
    const data_users = await userApi.register(user_payload);
    // save data to localStorage
    localStorage.setItem(KEYS.TOKEN, data_users.jwt);
    localStorage.setItem(KEYS.USER_INFO, JSON.stringify(data_users.user));

    return data_users.user;
  }
);

//  action login
export const loginAction = createAsyncThunk(
  "users/login",
  async (user_payload, thunkAPI) => {
    const data_users = await userApi.login(user_payload);

    localStorage.setItem(KEYS.TOKEN, data_users.jwt);
    localStorage.setItem(KEYS.USER_INFO, JSON.stringify(data_users.user));

    return data_users.user;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: JSON.parse(localStorage.getItem(KEYS.USER_INFO)) || {},
    setting: {},
  },
  reducers: {
    logout(state, action) {
      // clear local storage
      localStorage.removeItem(KEYS.USER_INFO);
      localStorage.removeItem(KEYS.TOKEN);
      localStorage.removeItem(KEYS.CART_INFO);

      // reset state.current in redux
      state.currentUser = {};
    },
  }, // reducers này sẽ chứa các synschornus action

  // cái nào mình muốn thực hiện api thì mình gọi hàm async action sử dụng extraReducers => cái reducers này do mình tự define
  extraReducers: {
    [registerAction.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      // action.payload at here =  data_users.user above.
    },

    [loginAction.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;

export default reducer;
