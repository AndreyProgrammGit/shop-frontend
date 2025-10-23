"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "../organisms/Header";

export const MainTemplate = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      router.replace("/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) return <div>Loading...</div>;
  return (
    <div className="bg-[linear-gradient(90deg,rgb(217,119,6,1)_0%,rgb(255,255,255,1)_7%,rgb(255,255,255,1)_93%,rgb(217,119,6,1)_100%)]">
      <div
        style={{
          width: 1620,
          margin: "0 auto",
          padding: "1rem",
          minHeight: "100vh",
        }}
      >
        <Header />

        {children}
      </div>
    </div>
  );
};
