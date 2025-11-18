import React, { FC, useState } from "react";
import { AutoComplete, Input, Spin } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useDebounce } from "@/hooks/useDebounce";
import { useSearchProductQuery } from "@/lib/api/product/productApi";
import Link from "next/link";
import { CustomInput } from "../atoms/CustomInput";

export const SearchBar: FC = () => {
  const [value, setValue] = useState("");
  const debounceValue = useDebounce(value, 500);

  const {
    data: results,
    isLoading,
    isFetching,
  } = useSearchProductQuery(debounceValue as string, {
    skip: !debounceValue,
  });

  console.log(isLoading, "loading");

  const options = !isFetching
    ? results?.map((item) => ({
        value: item.name,
        label: (
          <Link
            href={`/product/${item._id}`}
            className="flex justify-between items-center w-full !text-amber-500 gap-2"
          >
            <span>{item.name}</span>
            <span className="text-gray-500 text-sm">{item.brand}</span>
          </Link>
        ),
      }))
    : [
        {
          value: "loading",
          label: <Spin size="small" />,
        },
      ];

  return (
    <AutoComplete
      style={{ width: 250, height: "100%" }}
      options={options}
      value={value}
      onChange={setValue}
      notFoundContent={"Not found"}
    >
      <Input.Search size="large" placeholder="Search product" />
    </AutoComplete>
  );
};
