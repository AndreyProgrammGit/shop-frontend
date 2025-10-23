import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let initDataRaw: string | undefined = undefined;

if (typeof window !== "undefined") {
  const { retrieveRawInitData } = await import("@telegram-apps/sdk");
  initDataRaw = retrieveRawInitData();
}

export const authBaseApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dth0gn02-1488.euw.devtunnels.ms/",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      headers.set("Content-Type", "application/json");
      headers.set("Authorization", `tma ${initDataRaw}`);
      return headers;
    },
  }),
  endpoints: () => ({}),
});
