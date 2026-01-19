import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "../features/SearchSlice.js";
import CartSlice from "../features/CartSlice.js";
import AuthSlice from "../features/AuthSlice.js";

export const store = configureStore({
  reducer: {
    search: SearchSlice,
    cart: CartSlice,
    auth: AuthSlice,
  },
});
