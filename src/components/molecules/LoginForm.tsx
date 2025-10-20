"use client";
import React, { useEffect } from "react";
import { CustomForm } from "@atoms/CustomForm";
import { CustomInput } from "@atoms/CustomInput";
import { CustomButton } from "@atoms/CustomButton";
import { useLoginMutation } from "@lib/api/auth/authApi";
import { Alert, Flex, Form, Typography } from "antd";
import { redirect } from "next/navigation";
import { MailOutlined } from "@ant-design/icons";

const classes =
  "border border-gray-400 rounded-xl px-3 py-2 transition-colors duration-200 hover:border-orange-500! focus:border-orange-500! focus:ring-1! focus:ring-orange-400!";

export const LoginForm = () => {
  const [login, { isLoading, isError, error, isSuccess }] = useLoginMutation();

  const handleSubmit = async (data: { email: string; password: string }) => {
    try {
      const response = await login(data);
      localStorage.setItem("accessToken", response.data?.accessToken!);
      localStorage.setItem("refreshToken", response.data?.refreshToken!);
    } catch {
      redirect("/login");
    }
  };

  useEffect(() => {
    if (isSuccess) redirect("/home");
  }, [isSuccess]);

  return (
    <Flex vertical align="center" className="w-[500px]">
      <Typography.Title>Login Form</Typography.Title>
      <CustomForm onFinish={handleSubmit}>
        {isError && (
          <Alert
            message="Error"
            description={(error as any).data.message}
            showIcon
            type="error"
          />
        )}
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <CustomInput
            placeholder="email@email.com"
            prefix={<MailOutlined />}
            className={classes}
          />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <CustomInput
            type="password"
            placeholder="Input you password"
            prefix=""
            className={classes}
          />
        </Form.Item>
        <Form.Item label={null}>
          <CustomButton
            className="hover:border-orange-500! hover:text-orange-500!"
            htmlType="submit"
            loading={isLoading}
            type="default"
          >
            Login
          </CustomButton>
        </Form.Item>
      </CustomForm>
    </Flex>
  );
};
