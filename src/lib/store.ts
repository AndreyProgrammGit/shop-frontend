import { configureStore } from "@reduxjs/toolkit";
import { authBaseApi } from "./api/auth/authBaseApi";
import { baseApi } from "./api/baseApi";
import AuthSlice from "./slices/AuthSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [authBaseApi.reducerPath]: authBaseApi.reducer,
      [baseApi.reducerPath]: baseApi.reducer,
      auth: AuthSlice,
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
