import React, { FC } from "react";
import { Form } from "antd";
import { FormProps } from "./types/CustomFormProps";

export const CustomForm: FC<FormProps> = ({ children, ...props }) => {
  return (
    <Form
      // labelCol={{ span: 6 }}
      // wrapperCol={{ span: 16 }}
      // className="w-full max-w-md flex flex-col gap-4 border-white rounded-[35px] !p-4 bg-white"
      className="w-full max-w-md"
      {...props}
    >
      {children}
    </Form>
  );
};
