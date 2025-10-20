import { FormProps as AntdFormProps } from "antd";
import { ReactNode } from "react";

export interface FormProps extends AntdFormProps {
  children: ReactNode;
}
