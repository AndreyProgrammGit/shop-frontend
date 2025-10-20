import React, { FC, ReactNode } from "react";
import { Button } from "antd";
import { CustomButtonProps } from "./types/CustomButtonProps";

export const CustomButton: FC<CustomButtonProps> = ({
  children,
  type = "default",
  ...props
}) => {
  return (
    <Button type={type} {...props}>
      {children}
    </Button>
  );
};
