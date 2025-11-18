import { createSlice } from "@reduxjs/toolkit";
import { productApi } from "../api/product/productApi";

export interface FilterState {
  brands: string[];
  categories: string[];
  price: number | null;
  limit: number;
  loading: boolean;
  offset: number;
  sort: "asc" | "desc" | null;
}

const initialState: FilterState = {
  brands: [],
  categories: [],
  price: null,
  loading: false,
  limit: 9,
  offset: 0,
  sort: null,
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

    setNext: (state, action) => {
      state.limit = 9;
      state.offset += action.payload.offset;
    },
    setPrev: (state, action) => {
      state.limit = 9;
      state.offset -= action.payload.offset;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
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

export const { setFilters, setPrice, setNext, setPrev, setSort } =
  FilterSlice.actions;
export default FilterSlice.reducer;
