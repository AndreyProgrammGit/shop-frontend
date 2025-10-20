import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authBaseApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:1488",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: () => ({}),
});
