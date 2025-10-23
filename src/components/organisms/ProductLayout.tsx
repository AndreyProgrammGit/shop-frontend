import React, { FC } from "react";
import { ProductLayoutProps } from "./types/ProductLayoutProps";
import { useProductQuery } from "@/lib/api/product/productApi";
import {
  Skeleton,
  Flex,
  Col,
  Row,
  Typography,
  Tag,
  Divider,
  Descriptions,
} from "antd";
import Image from "next/image";
import { ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";
import { CustomButton } from "../atoms/CustomButton";

const { Title, Paragraph } = Typography;

export const ProductLayout: FC<ProductLayoutProps> = ({ id }) => {
  const { data: product, isLoading } = useProductQuery(id);

  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto mt-10">
        <Skeleton active paragraph={{ rows: 8 }} />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8 mt-6">
      <Row gutter={[40, 20]} align="middle">
        <Col xs={24} md={10}>
          <div className="relative rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50">
            <Image
              src="/images/placeholder.svg"
              width={458}
              height={458}
              alt={product?.name ?? ""}
              className="object-cover w-full h-full"
            />
          </div>
        </Col>

        <Col xs={24} md={14}>
          <Flex vertical gap={10}>
            <Title level={3} className="!mb-2">
              {product?.name}
            </Title>

            <Flex gap={8}>
              <Tag color="blue">{product?.brand}</Tag>
              <Tag color="green">{product?.category}</Tag>
            </Flex>

            <Divider className="!my-3" />

            <Paragraph className="text-gray-600 leading-relaxed">
              {product?.desc ?? "Don`t exist description"}
            </Paragraph>

            <Title level={2} className="!mt-4 !mb-2 text-amber-500">
              ${product?.price?.toFixed(2) ?? "0.00"}
            </Title>

            <Flex gap={10} wrap>
              <CustomButton
                type="primary"
                size="large"
                icon={<ShoppingCartOutlined />}
                className="!bg-amber-500 hover:!bg-amber-600"
              >
                Add to curt
              </CustomButton>

              <CustomButton
                size="large"
                icon={<HeartOutlined />}
                className="border-gray-300"
              >
                Favorite
              </CustomButton>
            </Flex>
          </Flex>
        </Col>
      </Row>

      <Divider className="!my-6" />

      <Descriptions
        bordered
        column={1}
        size="middle"
        styles={{
          content: {
            backgroundColor: "#fafafa",
          },
        }}
      >
        <Descriptions.Item label="Name">{product?.name}</Descriptions.Item>
        <Descriptions.Item label="Brand">{product?.brand}</Descriptions.Item>
        <Descriptions.Item label="Category">
          {product?.category}
        </Descriptions.Item>
        <Descriptions.Item label="Count">
          {product?.count ?? 0}
        </Descriptions.Item>
        <Descriptions.Item label="Price">
          ${product?.price?.toFixed(2) ?? "0.00"}
        </Descriptions.Item>
        <Descriptions.Item label="Description">
          {product?.desc ?? ""}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};
