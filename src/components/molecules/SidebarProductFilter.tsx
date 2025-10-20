import { Flex } from "antd";
import React, { FC } from "react";
import { CustomSlider } from "../atoms/CustomSlider";
import { SidebarProductFilterProps } from "./types/SidebarProductFilterProps";

export const SidebarProductFilter: FC<SidebarProductFilterProps> = ({
  data,
}) => {
  return (
    <Flex>
      <ul>
        <li>Brand</li>
        <li>Category</li>
        <li>
          <CustomSlider max={data.maxPrice} />
        </li>
      </ul>
    </Flex>
  );
};
