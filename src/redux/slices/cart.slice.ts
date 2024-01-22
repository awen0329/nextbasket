import { CartProduct, Product } from "@/lib/types/product";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: CartProduct[];
}

const initialState = { items: [] } as CartState;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Product>) {
      state.items.push({ ...action.payload, quantity: 1 });
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increaseQuantity(state, action: PayloadAction<number>) {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index > -1) {
        state.items[index].quantity += 1;
      }
    },
    decreaseQuantity(state, action: PayloadAction<number>) {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index > -1 && state.items[index].quantity > 1) {
        state.items[index].quantity -= 1;
      }
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
