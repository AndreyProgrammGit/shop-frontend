import React, { FC } from "react";
import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";
import { CustomCheckboxProps } from "./types/CustomCheckboxProps";

export const CustomCheckbox: FC<CustomCheckboxProps> = ({
  name,
  onChange,
  checked,
}) => {
  return (
    <Checkbox checked={checked} onChange={onChange} value={name}>
      {name}
    </Checkbox>
  );
};
