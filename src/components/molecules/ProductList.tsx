import { CardItem } from "@atoms/CardItem";
import React, { FC } from "react";
import { Col, Row, Spin } from "antd";
import { ProductListProps } from "./types/ProductListProps";
import { useAppSelector } from "@/lib/hooks";

export const ProductList: FC<ProductListProps> = ({ products }) => {
  const loading = useAppSelector((state) => state.filters.loading);

  return (
    <Row gutter={[0, 24]} align="middle" justify="center">
      {!loading ? (
        products?.map((item) => (
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
        ))
      ) : (
        <Spin size="large" />
      )}
    </Row>
  );
};
