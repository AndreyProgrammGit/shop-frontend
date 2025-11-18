import React, { useEffect, useState } from "react";
import { SearchBar } from "@molecules/SearchBar";
import Link from "next/link";
import { useTelegramUserInfoQuery } from "@/lib/api/user/userApi";
import { CustomDropdownUserInfo } from "../atoms/CustomDropdownUserInfo";
import { SkeletonDropdownUserInfo } from "../molecules/SkeletonDropdownUserInfo";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useUserInfo } from "@/hooks/useUserInfo";

const classesLink =
  "relative px-3 py-1 text-gray-700 hover:text-amber-500 transition-colors duration-300 after:block after:h-0.5 after:w-0 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full";

export const Header = () => {
  const { userInfo, isLoading } = useUserInfo();
  const [countProducts, setCountProducts] = useState<number>(0);

  useEffect(() => {
    // setCountProducts(JSON.parse(localStorage.getItem("products") ?? "").length);
  }, []);

  return (
    <header className="flex justify-between items-center px-6 py-3 mb-8">
      <nav className="flex-1 flex justify-center gap-6 items-center">
        <Link href="/" className={classesLink}>
          Home
        </Link>
        <Link href="/contact" className={classesLink}>
          Contact
        </Link>
        <Link href="/about" className={classesLink}>
          About
        </Link>
        <SearchBar />
      </nav>
      <Link href="/cart" className="w-[35px] relative">
        <ShoppingCartOutlined style={{ color: "orange", fontSize: 24 }} />
        <div className="absolute top-[-3px] left-6 text-amber-500">
          {countProducts}
        </div>
      </Link>
      {!isLoading && userInfo ? (
        <CustomDropdownUserInfo
          firstname={userInfo.firstName}
          lastname={userInfo.lastName}
          username={userInfo.username}
        />
      ) : (
        <SkeletonDropdownUserInfo />
      )}
    </header>
  );
};
