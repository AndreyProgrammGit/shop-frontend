"use client";
import React, { FormEvent, useEffect } from "react";
import { CustomForm } from "@atoms/CustomForm";
import { CustomInput } from "@atoms/CustomInput";
import { CustomButton } from "@atoms/CustomButton";
import { useRegisterMutation } from "@/lib/api/auth/authApi";
import { Alert, Flex, Form, Typography } from "antd";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";

const classes =
  "border border-gray-400 rounded-xl px-3 py-2 transition-colors duration-200 hover:border-orange-500! focus:border-orange-500! focus:ring-1! focus:ring-orange-400!";

export const RegisterForm = () => {
  const router = useRouter();
  const [register, { isLoading, isError, error, isSuccess }] =
    useRegisterMutation();

  const handleSubmit = async (data: {
    email: string;
    password: string;
    city: string;
    old: number;
    surname: string;
    name: string;
  }) => {
    try {
      register(data);
    } catch {
      redirect("/login");
    }
  };

  useEffect(() => {
    if (isSuccess) router.push("/home");
  }, [isSuccess]);

  return (
    <Flex vertical align="center" className="w-[500px]">
      <Typography.Title>Register Form</Typography.Title>
      <CustomForm onFinish={handleSubmit}>
        {isError && (
          <Alert
            description={(error as any).data.message}
            type="error"
            message="Error"
            showIcon
          />
        )}
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email username!" },
          ]}
        >
          <CustomInput className={classes} placeholder="Input your email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <CustomInput
            type="password"
            className={classes}
            placeholder="Input your password"
          />
        </Form.Item>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <CustomInput placeholder="Input your name" className={classes} />
        </Form.Item>
        <Form.Item
          label="Surname"
          name="surname"
          rules={[{ required: true, message: "Please input your surname!" }]}
        >
          <CustomInput className={classes} placeholder="Input your surname" />
        </Form.Item>
        <Form.Item
          label="Old"
          name="old"
          rules={[{ required: true, message: "Please input your old!" }]}
        >
          <CustomInput className={classes} placeholder="Input your old" />
        </Form.Item>
        <Form.Item label="City" name="city" rules={[{ required: false }]}>
          <CustomInput className={classes} placeholder="Input your city" />
        </Form.Item>
        <Form.Item label={null}>
          <CustomButton
            className="hover:border-orange-500! hover:text-orange-500!"
            htmlType="submit"
            loading={isLoading}
            type="default"
          >
            Register
          </CustomButton>
        </Form.Item>
      </CustomForm>
    </Flex>
  );
};
