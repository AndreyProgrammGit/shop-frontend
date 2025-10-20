import { baseApi } from "../baseApi";

export type TProductResponse = {
  _id: string;
  name: string;
  brand: string;
  category: string;
  count: number;
  price: number;
  desc: string;
  productId: string;
};

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    productAll: builder.query<TProductResponse[], void>({
      query: () => ({
        url: "/product/getALl",
        method: "GET",
      }),
    }),
  }),
});

export const { useProductAllQuery } = productApi;
