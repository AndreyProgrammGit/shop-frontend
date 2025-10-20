import { baseApi } from "../baseApi";

export type TUserInfoResponse = {
  email: string;
  name: string;
  surname: string;
  old: number;
  city: string | undefined | null;
};

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userInfo: builder.query<TUserInfoResponse, void>({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
    }),
  }),
});

export const { useUserInfoQuery } = userApi;
