import React, { FC } from "react";
import { CustomInput } from "@atoms/CustomInput";
import { CustomButton } from "@atoms/CustomButton";

export const SearchBar = () => {
  return (
    <CustomInput
      className="!w-[350px]"
      placeholder="Search product"
      allowClear
      addonAfter={
        <CustomButton className="!bg-amber-500 !border-none hover:!bg-amber-600 !text-white transition-all duration-200">
          Search
        </CustomButton>
      }
      size="large"
    />
  );
};
