import { createSlice } from "@reduxjs/toolkit";
import { productApi } from "../api/product/productApi";

export interface FilterState {
  brands: string[];
  categories: string[];
  price: number;
  loading: boolean;
}

const initialState: FilterState = {
  brands: [],
  categories: [],
  price: 0,
  loading: false,
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
      state.price = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addMatcher(
        productApi.endpoints.productsAll.matchPending,
        (state, action) => {
          state.loading = true;
        }
      )
      .addMatcher(
        productApi.endpoints.productsAll.matchFulfilled,
        (state, action) => {
          state.loading = false;
        }
      )
      .addMatcher(
        productApi.endpoints.productsAll.matchRejected,
        (state, action) => {
          state.loading = false;
        }
      );
  },
});

export const { setFilters, setPrice } = FilterSlice.actions;
export default FilterSlice.reducer;
