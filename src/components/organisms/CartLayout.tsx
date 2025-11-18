"use client";
import React, { useEffect, useState } from "react";
import { Card, Spin, Empty } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { CustomButton } from "../atoms/CustomButton";
import Link from "next/link";
import { useCartItem } from "@/hooks/useCartItems";

export const CartLayout = () => {
  const [idData, setIdData] = useState<{ productIds: string }[]>([]);

  const { products, isFetching, isLoading } = useCartItem(idData);

  useEffect(() => {
    const local = localStorage.getItem("products");
    if (local) setIdData(JSON.parse(local));
  }, []);

  const totalPrice =
    products?.reduce((sum, product) => sum + product.price, 0) ?? 0;

  const removeFromCart = async (id: string) => {
    const updated = idData.filter((pid) => pid.productIds !== id);
    setIdData(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  const clearCart = () => {
    setIdData([]);
    localStorage.removeItem("products");
  };

  if (isLoading || isFetching)
    return (
      <div className="flex justify-center items-center h-64">
        <Spin size="large" />
      </div>
    );

  if (!products || products.length === 0)
    return (
      <div className="flex flex-col items-center justify-center h-64 text-amber-600">
        <span className="text-5xl mb-3">🛒</span>
        <Empty description="Your cart is empty" />
      </div>
    );

  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-amber-600">
          🛍️ Your Shopping Cart
        </h1>
        <CustomButton
          className="!bg-orange-500 hover:!bg-orange-600 text-white px-4 py-2 rounded-lg shadow-md"
          onClick={clearCart}
        >
          Clear Cart 🗑️
        </CustomButton>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence>
          {products.map((product) => (
            <motion.div
              key={product._id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <Card
                className="rounded-2xl shadow-md border border-orange-300 hover:shadow-lg transition-all bg-orange-50"
                title={
                  <div className="flex justify-between items-center">
                    <span className="text-orange-600 font-semibold">
                      {product.name}
                    </span>
                    <CustomButton
                      onClick={() => removeFromCart(product.productId)}
                      className="!cursor-pointer text-orange-500 hover:text-red-500 text-lg font-semibold transition"
                    >
                      ✖
                    </CustomButton>
                  </div>
                }
              >
                <div className="flex flex-col gap-2">
                  <span className="text-amber-700 font-medium">
                    Brand: {product.brand}
                  </span>
                  <span className="text-amber-600">
                    Category: {product.category}
                  </span>
                  <span className="text-lg font-semibold text-orange-600">
                    ${product.price}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex justify-between items-center mt-6 border-t pt-4 border-orange-200">
        <span className="text-2xl font-bold text-amber-700">
          Total: ${totalPrice.toFixed(2)}
        </span>
        <CustomButton className="!bg-amber-500 hover:!bg-orange-600 text-white font-semibold text-lg px-6 py-3 rounded-xl shadow-md">
          <Link href="/payment">Checkout ✅</Link>
        </CustomButton>
      </div>
    </div>
  );
};
