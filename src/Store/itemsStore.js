import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "../features/SearchSlice";
import CartSlice from "../features/CartSlice";
import AuthSlice from "../features/AuthSlice";

export const store = configureStore({
  reducer: {
    search: SearchSlice,
    cart: CartSlice,
    auth: AuthSlice,
  },
});
