import React, { FC, useState } from "react";
import { CustomInput } from "@atoms/CustomInput";
import { CustomButton } from "@atoms/CustomButton";
import { useDebounce } from "@/hooks/useDebounce";

export const SearchBar = () => {
  const [value, inputValue] = useState("");
  const debounceValue = useDebounce(value, 1000);

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
