"use client";
import { ProductLayout } from "@/components/organisms/ProductLayout";
import { MainTemplate } from "@/components/templates/MainTemplate";
import { useParams } from "next/navigation";
import React from "react";

export default function singlePageProduct() {
  const { id } = useParams();

  if (!id || Array.isArray(id)) {
    return <div>Not found Product</div>;
  }

  return (
    <MainTemplate>
      <ProductLayout id={id} />
    </MainTemplate>
  );
}
