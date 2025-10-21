import React, { useEffect, useState } from "react";
import { SidebarProductFilter } from "../molecules/SidebarProductFilter";
import { ProductList } from "../molecules/ProductList";
import { useProductAllQuery } from "@/lib/api/product/productApi";
import { useAppSelector } from "@/lib/hooks";

export const ProductLayout = () => {
  const selector = useAppSelector((state) => state.filters);
  const { data: products, isLoading, isError } = useProductAllQuery(selector);

  const [aggregateData, setAggregateData] = useState<{
    brands: string[];
    categories: string[];
    maxPrice: number;
  }>({
    brands: [],
    categories: [],
    maxPrice: 0,
  });
  console.log(selector, "selector");

  useEffect(() => {
    if (products && !isLoading) {
      const brands = products
        .map((product) => product.brand)
        .filter((brand, index, array) => array.indexOf(brand) === index);

      const categories = products
        .map((product) => product.category)
        .filter((category, index, array) => array.indexOf(category) === index);

      const maxPrice = Math.max(...products.map((product) => product.price));

      setAggregateData({ brands, categories, maxPrice });
    }
  }, [products, isLoading]);

  return (
    <div className="flex gap-6">
      <aside className="w-1/10">
        <SidebarProductFilter data={aggregateData} />
      </aside>
      <main className="flex-1">
        <ProductList products={products ?? []} />
      </main>
    </div>
  );
};
