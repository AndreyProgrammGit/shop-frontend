import { createSlice } from "@reduxjs/toolkit";

export interface FilterState {
  brands: string[];
  categories: string[];
  price: number;
}

const initialState: FilterState = {
  brands: [],
  categories: [],
  price: 1499,
};

const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      console.log(action.payload);
      state.brands = Array.isArray(action.payload.brands)
        ? action.payload.brands
        : [action.payload.brands];
      state.categories = Array.isArray(action.payload.categories)
        ? action.payload.categories
        : [action.payload.categories];
    },

    setPrice: (state, action) => {
      state.price = action.payload.price;
    },
  },
});

export const { setFilters, setPrice } = FilterSlice.actions;
export default FilterSlice.reducer;
