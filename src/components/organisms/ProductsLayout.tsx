import React, { useEffect, useState } from "react";
import { SidebarProductFilter } from "../molecules/SidebarProductFilter";
import { ProductList } from "../molecules/ProductList";
import { useProductsAllQuery } from "@/lib/api/product/productApi";
import { useAppSelector } from "@/lib/hooks";
import { Skeleton, Spin } from "antd";

export const ProductsLayout = () => {
  const selector = useAppSelector((state) => state.filters);
  const { data: products, isLoading } = useProductsAllQuery(selector);

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
      const brands = products
        .map((product) => product.brand)
        .filter((brand, index, array) => array.indexOf(brand) === index);

      const categories = products
        .map((product) => product.category)
        .filter((category, index, array) => array.indexOf(category) === index);

      const maxPrice = Math.max(...products.map((product) => product.price));

      setAggregateData({ brands, categories, maxPrice });
    }
  }, [isLoading]);

  return (
    <div className="flex gap-6">
      <aside className="w-1/10">
        {!isLoading ? (
          <SidebarProductFilter data={aggregateData} />
        ) : (
          <div className="flex flex-col gap-3.5">
            <Skeleton.Node active style={{ width: 160 }} />
            <Skeleton.Node active style={{ width: 160 }} />
            <Skeleton.Node active style={{ width: 160 }} />
          </div>
        )}
      </aside>
      <main className="flex-1">
        {!isLoading ? (
          <ProductList products={products ?? []} />
        ) : (
          <Spin size="large" />
        )}
      </main>
    </div>
  );
};
