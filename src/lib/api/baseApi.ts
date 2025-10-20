import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import { logout } from "../slices/AuthSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:1488",
  credentials: "include",
  prepareHeaders: (headers) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");
      if (token) headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
const baseQueryWithReauth: BaseQueryFn<any, unknown, unknown> = async (
  args,
  api,
  extraOptions
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    try {
      const refreshResult = await baseQuery(
        { url: "/auth/refresh", method: "POST", credentials: "include" },
        api,
        extraOptions
      );

      if (refreshResult.data) {
        const { accessToken } = refreshResult.data as { accessToken: string };
        console.log(accessToken);
        localStorage.setItem("accessToken", accessToken);

        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logout());
      }
    } catch {
      api.dispatch(logout());
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
