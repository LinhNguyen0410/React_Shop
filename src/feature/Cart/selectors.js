import { createSelector } from "@reduxjs/toolkit";

const cartItemSelectors = (state) => state.cart.cartItems;
// count number product in cart...

// createSelector(thằng muốn phụ thuộc, ( hàm tính kết quả)) =>{})

export const cartItemCount = createSelector(cartItemSelectors, (cartItems) =>
  cartItems.reduce((count, item) => count + item.quantity, 0)
);

//  total cart
export const cartItemTotal = createSelector(cartItemSelectors, (cartItems) =>
  cartItems.reduce(
    (total, item) => total + item.productDetail.salePrice * item.quantity,
    0
  )
);
