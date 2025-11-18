"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { TonConnectButton, useTonConnectUI } from "@tonconnect/ui-react";
import { Card, Spin } from "antd";
import { CustomButton } from "../atoms/CustomButton";
import { useCartItem } from "@/hooks/useCartItems";

export const PaymentLayout = () => {
  const [tonConnectUI] = useTonConnectUI();
  const [idData, setIdData] = useState<{ productIds: string }[]>([]);

  useEffect(() => {
    const local = localStorage.getItem("products");
    if (local) setIdData(JSON.parse(local));
  }, []);

  const { products, isLoading } = useCartItem(idData);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-64">
        <Spin size="large" />
      </div>
    );

  const total = products?.reduce((sum, product) => sum + product.price, 0) ?? 0;
  const tonAmount = (total / 2).toFixed(2);

  const handlePay = async () => {
    try {
      await tonConnectUI.sendTransaction({
        validUntil: Math.floor(Date.now() / 1000) + 300,
        messages: [
          {
            address: "UQBqz9ehH3--pDc43riAvvNxmIQyhbbcoZU7jVe_3TFh8WGA",
            amount: (parseFloat(tonAmount) * 10 ** 9).toString(),
          },
        ],
      });
      alert("✅ Payment sent successfully!!");
      localStorage.removeItem("products");
    } catch (err) {
      console.error(err);
      alert("❌ Payment was cancelled or an error occurred");
    }
  };

  return (
    <div className="p-6 flex flex-col items-center gap-6">
      <Card className="max-w-md w-full shadow-lg rounded-2xl border border-orange-200 bg-orange-50">
        <h1 className="text-3xl font-bold text-center text-amber-600 mb-4">
          💳 Payment Summary
        </h1>

        <div className="flex justify-between mb-3 text-lg text-amber-700">
          <span>Total (USD):</span>
          <span className="font-semibold">${total.toFixed(2)}</span>
        </div>

        <div className="flex justify-between mb-4 text-lg text-amber-700">
          <span>To Pay (TON):</span>
          <span className="font-semibold">{tonAmount} TON</span>
        </div>

        <div className="flex justify-center mb-4">
          <TonConnectButton />
        </div>

        <CustomButton
          onClick={handlePay}
          className="!bg-orange-500 hover:!bg-orange-600 text-white font-semibold text-lg px-6 py-3 rounded-xl w-full shadow-md"
        >
          Pay {tonAmount} TON 💎
        </CustomButton>
      </Card>

      <Link
        href="/cart"
        className="text-amber-600 hover:text-orange-600 underline text-lg"
      >
        ← Back to Cart
      </Link>
    </div>
  );
};
