import { authBaseApi } from "./authBaseApi";

export type TLoginRequest = {
  email: string;
  password: string;
};

export type TLoginResponse = {
  accessToken: string;
  refreshToken: string;
};

export type TRegisterRequest = {
  email: string;
  password: string;
  name: string;
  surname: string;
  city: string;
  old: number;
};

export type TRegisterResponse = {
  accessToken: string;
  refreshToken: string;
};

export const authApi = authBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<TLoginResponse, TLoginRequest>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        // body,
        // credentials: "include",
      }),
    }),
    register: builder.mutation<TRegisterResponse, TRegisterRequest>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
