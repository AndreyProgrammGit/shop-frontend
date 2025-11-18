import { useCartQuery } from "@/lib/api/product/productApi";

export const useCartItem = (idData: { productIds: string }[]) => {
  const {
    data: products,
    isLoading,
    isFetching,
  } = useCartQuery(idData.map((item) => item.productIds));

  return { products, isFetching, isLoading };
};
