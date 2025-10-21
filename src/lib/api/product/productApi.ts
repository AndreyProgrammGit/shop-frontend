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

type TProductRequest = {
  brands: string[];
  categories: string[];
  price: number;
};

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    productAll: builder.query<TProductResponse[], TProductRequest>({
      query: (queryParams) => {
        const params = new URLSearchParams();

        if (queryParams.brands?.length) {
          queryParams.brands.forEach((b) => params.append("brands", b));
        }

        if (queryParams.categories?.length) {
          queryParams.categories.forEach((c) => params.append("categories", c));
        }

        if (queryParams.price) {
          params.append("price", queryParams.price.toString());
        }

        return {
          url: `/products?${params.toString()}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useProductAllQuery } = productApi;
