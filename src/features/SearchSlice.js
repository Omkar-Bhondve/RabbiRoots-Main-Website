import { createSlice } from "@reduxjs/toolkit";
import { createUnifiedProducts } from "../Data/ProductsItems.js";

const allProducts = createUnifiedProducts();

const initialState = {
  term: "",
  items: [],
};

const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.term = action.payload.toLowerCase();
      if (state.term.trim() === "") {
        state.items = [];
      } else {
        state.items = allProducts.filter((item) =>
          item.name.toLowerCase().includes(state.term)
        );
      }
    },
    clearSearch: (state) => {
      state.term = "";
      state.items = [];
    },
  },
});

export const { setSearch, clearSearch } = SearchSlice.actions;
export default SearchSlice.reducer;
