"use client";
import React, { useEffect, useState } from "react";
import { SidebarProductFilter } from "../molecules/SidebarProductFilter";
import { ProductList } from "../molecules/ProductList";
import { useProductsAllQuery } from "@/lib/api/product/productApi";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { Skeleton } from "antd";
import { setNext, setPrev } from "@/lib/slices/FilterSlice";
import { CustomButton } from "../atoms/CustomButton";
import { CustomDropdownSort } from "../atoms/CustomDropdownSort";

export const ProductsLayout = () => {
  const selector = useAppSelector((state) => state.filters);
  const dispatch = useAppDispatch();

  const {
    data: products,
    isFetching,
    isLoading,
  } = useProductsAllQuery(selector);

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
    console.log(products);
    if (products?.products.length && !isLoading) {
      const brands = products?.brands;
      const categories = products?.categories;
      const maxPrice = Math.max(...products?.products.map((p) => p.price));
      setAggregateData({ brands, categories, maxPrice });
    }
  }, [isLoading]);

  const isPrevDisabled = selector.offset <= 0;
  const isNextDisabled = !(products?.total! >= selector.offset);
  console.log(isNextDisabled);

  const handleLoadMore = () => {
    dispatch(setNext({ offset: 9 }));
  };

  const handleLoadLess = () => {
    dispatch(setPrev({ offset: 9 }));
  };

  return (
    <div className="flex gap-6">
      <aside className="w-1/8 sticky top-0 left-0">
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
      <main className="flex-1 flex flex-col items-center">
        <div className="w-full flex justify-end mb-6">
          <CustomDropdownSort />
        </div>
        <ProductList products={products ?? { products: [] }} />

        {!isFetching && (
          <div className="flex justify-between w-full mt-5">
            <CustomButton disabled={isPrevDisabled} onClick={handleLoadLess}>
              Previously Products
            </CustomButton>
            <CustomButton disabled={isNextDisabled} onClick={handleLoadMore}>
              Next Products
            </CustomButton>
          </div>
        )}
      </main>
    </div>
  );
};
