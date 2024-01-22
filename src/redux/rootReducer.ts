import { combineReducers } from "@reduxjs/toolkit";
import createWebStorage from "redux-persist/es/storage/createWebStorage";

import cartReducer from "./slices/cart.slice";
import wishlistReducer from "./slices/wishlist.slice";
import { productApi } from "./apis/product.api";

export const createNoopStorage = () => ({
  getItem(_key: string) {
    return Promise.resolve(null);
  },
  setItem(_key: string, value: any) {
    return Promise.resolve(value);
  },
  removeItem(_key: string) {
    return Promise.resolve();
  },
});

export const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

export const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: ["cart", "wishlist"],
};

export const productPersistConfig = {
  key: "product",
  storage,
  keyPrefix: "redux-",
  whitelist: ["cart", "wishlist"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
  [productApi.reducerPath]: productApi.reducer,
});

export default rootReducer;
