import React, { useEffect, useState } from "react";
import { SidebarProductFilter } from "../molecules/SidebarProductFilter";
import { ProductList } from "../molecules/ProductList";
import { useProductAllQuery } from "@/lib/api/product/productApi";

export const ProductLayout = () => {
  const { data: products, isLoading, isError } = useProductAllQuery();

  const [aggregateData, setAggregateData] = useState<{
    brands: string[];
    categories: string[];
    maxPrice: number;
  }>({
    brands: [],
    categories: [],
    maxPrice: 0,
  });

  useEffect(() => {
    if (products && !isLoading) {
      setAggregateData({
        brands: products?.map((product) => product.brand),
        categories: products?.map((product) => product.category),
        maxPrice: Math.max(...products?.map((product) => product.price)),
      });
    }
  }, [products, isLoading]);

  console.log(aggregateData);

  return (
    <div className="flex gap-6">
      <aside className="w-1/6">
        <SidebarProductFilter data={aggregateData} />
      </aside>
      <main className="flex-1">
        <ProductList products={products ?? []} />
      </main>
    </div>
  );
};
