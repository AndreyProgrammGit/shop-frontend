"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const TemplateAuth = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  console.log(router);
  useEffect(() => {
    setLoading(true);
  }, [router]);

  if (!loading) return <div>Loading...</div>;

  return (
    <div
      className="flex justify-center w-full h-full items-center"
      style={{ backgroundColor: "rgb(217,119, 6, 1)" }}
    >
      {children}
    </div>
  );
};
