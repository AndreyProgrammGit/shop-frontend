import { Divider, Flex } from "antd";
import React, { FC } from "react";
import { CustomSlider } from "../atoms/CustomSlider";
import { SidebarProductFilterProps } from "./types/SidebarProductFilterProps";
import { CustomCollapse } from "../atoms/CustomCollapse";

export const SidebarProductFilter: FC<SidebarProductFilterProps> = ({
  data,
}) => {
  console.log(data);
  return (
    <Flex>
      <ul className="flex flex-col gap-4">
        <li>
          <CustomCollapse dataStrings={data.brands} label="Brands" />
        </li>
        <li>
          <CustomCollapse dataStrings={data.categories} label="Categories" />
        </li>
        <li>
          <Divider>Price</Divider>
          <CustomSlider max={data.maxPrice} />
        </li>
      </ul>
    </Flex>
  );
};
