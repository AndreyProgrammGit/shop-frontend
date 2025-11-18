import { baseApi } from "../baseApi";

export type TProductsResponse = {
  products: TProductResponse[];
  brands: string[];
  categories: string[];
  total: number;
};

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
  price: number | null;
  limit: number;
  offset: number;
  sort: "asc" | "desc" | null;
};

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    productsAll: builder.query<TProductsResponse, TProductRequest>({
      query: (queryParams) => {
        const params = new URLSearchParams();

        const appendParams = (key: string, arr?: string[]) => {
          arr?.forEach((value) => params.append(key, value));
        };

        appendParams("brands", queryParams.brands);
        appendParams("categories", queryParams.categories);

        Object.entries({
          price: queryParams.price,
          limit: queryParams.limit,
          offset: queryParams.offset,
          sort: queryParams.sort,
        }).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            params.append(key, String(value));
          }
        });

        return {
          url: `/products?&${params.toString()}`,
          method: "GET",
        };
      },
    }),
    product: builder.query<TProductResponse, string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
    cart: builder.query<TProductResponse[], string[]>({
      query: (queryParams) => {
        const params = new URLSearchParams();

        queryParams.forEach((id) => params.append("productIds", id));

        return {
          url: `products/cart?${params.toString()}`,
          method: "GET",
        };
      },
    }),
    searchProduct: builder.query<TProductResponse[], string>({
      query: (searchString) => {
        const params = new URLSearchParams();

        params.append("search", searchString);

        return {
          url: `/products/search?${params.toString()}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useProductsAllQuery,
  useProductQuery,
  useSearchProductQuery,
  useCartQuery,
  useLazyProductsAllQuery,
} = productApi;
