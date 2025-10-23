import { baseApi } from "../baseApi";

export type TUserInfoResponse = {
  email: string;
  name: string;
  surname: string;
  old: number;
  city: string | undefined | null;
};

export type TTelegramUserInfoResponse = {
  telegramId: string;
  username: string;
  firstName: string;
  lastName: string;
};

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userInfo: builder.query<TUserInfoResponse, void>({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
    }),
    telegramUserInfo: builder.query<TTelegramUserInfoResponse, void>({
      query: () => ({
        url: "/telegram-user/",
        method: "GET",
      }),
    }),
  }),
});

export const { useUserInfoQuery, useTelegramUserInfoQuery } = userApi;
