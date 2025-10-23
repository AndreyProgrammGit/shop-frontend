"use client";
import { ProductsLayout } from "@/components/organisms/ProductsLayout";
import { MainTemplate } from "@/components/templates/MainTemplate";

export default function Home() {
  return (
    <MainTemplate>
      <ProductsLayout />
    </MainTemplate>
  );
}
