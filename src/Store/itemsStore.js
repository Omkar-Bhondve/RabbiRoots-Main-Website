import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "../Features/SearchSlice";
import CartSlice from "../Features/CartSlice";
import AuthSlice from "../Features/AuthSlice";

export const store = configureStore({
  reducer: {
    search: SearchSlice,
    cart: CartSlice,
    auth: AuthSlice,
  },
});
