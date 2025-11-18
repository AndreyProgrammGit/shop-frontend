import { CartLayout } from "@/components/organisms/CartLayout";
import { MainTemplate } from "@/components/templates/MainTemplate";
import React from "react";

export default function page() {
  return (
    <MainTemplate>
      <CartLayout />
    </MainTemplate>
  );
}
