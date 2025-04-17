import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const product = action.payload;

      const exist = state.items.find((item) => item.id === product.id);

      if (!exist) {
        state.items.push({ product, quantity: 1 });
        console.log(product);
      } else {
        exist.quantity++;
      }
    },
    deleteFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload
      );
    },
  },
});

export const { addProductToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
