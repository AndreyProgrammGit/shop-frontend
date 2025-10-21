import { configureStore } from "@reduxjs/toolkit";
import { authBaseApi } from "./api/auth/authBaseApi";
import { baseApi } from "./api/baseApi";
import AuthSlice from "./slices/AuthSlice";
import FilterSlice from "./slices/FilterSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [authBaseApi.reducerPath]: authBaseApi.reducer,
      [baseApi.reducerPath]: baseApi.reducer,
      auth: AuthSlice,
      filters: FilterSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(authBaseApi.middleware)
        .concat(baseApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
