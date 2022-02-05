const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showMiniCart: false,
    cartItems: [],
  },
  reducers: {
    showMiniCart(state, action) {
      state.showMiniCart = true;
    },

    hideMiniCart(state, action) {
      state.showMiniCart = false;
    },

    addToCart(state, action) {
      // newItem = {id, product , quantity}
      const newItem = action.payload;
      const index = state.cartItems.findIndex((item) => item.id === newItem.id);

      if (index >= 0) {
        //...is available => increase quantity
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        //...is unavailable product in cart => push into cart
        state.cartItems.push(newItem);
      }
    },

    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      //   check product is available in cart...
      const indexInCart = state.cartItems.findIndex((item) => item.id === id);
      if (indexInCart >= 0) {
        state.cartItems[indexInCart].quantity = quantity;
      }
    },

    removeFromCart(state, action) {
      // received ID product want remove - and filter all product in cart has ID !==  idNeedToRemove. === ignore product has id need to remove.
      const idNeedToRemove = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== idNeedToRemove
      );
    },
  },
});

const { actions, reducer } = cartSlice;
// actions, reducer là những cái dc hàm cartSlice tạo sẵn cho mình khi mình khai báo như trên.

export const {
  showMiniCart,
  hideMiniCart,
  addToCart,
  setQuantity,
  removeFromCart,
} = actions;

export default reducer;
