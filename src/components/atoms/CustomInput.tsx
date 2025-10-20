import { Input } from "antd";
import React, { FC } from "react";
import { CustomInputProps } from "./types/CustomInputProps";

export const CustomInput: FC<CustomInputProps> = ({ ...props }) => {
  return (
    <Input
      className="!focus:outline-none !focus:ring-0 !focus:border-none"
      {...props}
    />
  );
};
