import { CardItem } from "@atoms/CardItem";
import React, { FC } from "react";
import { Col, Row } from "antd";
import { ProductListProps } from "./types/ProductListProps";

export const ProductList: FC<ProductListProps> = ({ products }) => (
  <Row gutter={[0, 24]} align="middle" justify="center">
    {products?.map((item) => (
      <Col key={item.productId} span={8} className="!flex !justify-center">
        <CardItem
          name={item.name}
          brand={item.brand}
          category={item.category}
          count={item.count}
          price={item.price}
          desc={item.desc}
          productId={item.productId}
        />
      </Col>
    ))}
  </Row>
);
