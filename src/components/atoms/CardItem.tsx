import React, { FC } from "react";
import { CardItemProps } from "./types/CardItemProps";
import { Card } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";

const { Meta } = Card;

export const CardItem: FC<CardItemProps> = ({
  brand,
  category,
  count,
  desc,
  name,
  price,
  productId,
}) => {
  const router = useRouter();
  return (
    <Card
      onClick={() => router.push(`/product/${productId}`)}
      hoverable
      style={{ width: 350 }}
      cover={
        <Image
          src="/images/placeholder.svg"
          width={458}
          height={458}
          alt={name}
        />
      }
    >
      <Meta
        title={name}
        description={
          <ul className="mt-2 space-y-1 text-gray-600 text-sm">
            <li>
              <span className="font-semibold">Description:</span> {desc}
            </li>
            <li>
              <span className="font-semibold">Category:</span> {category}
            </li>
            <li>
              <span className="font-semibold">Brand:</span> {brand}
            </li>
            <li>
              <span className="font-semibold">In Stock:</span> {count}
            </li>
            <li className="text-amber-600 font-bold">
              <span className="font-semibold">Price:</span> ${price}
            </li>
          </ul>
        }
      />
    </Card>
  );
};
