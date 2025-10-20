import React from "react";
import { SearchBar } from "@molecules/SearchBar";
import Link from "next/link";
import { useUserInfoQuery } from "@/lib/api/user/userApi";
import { CustomDropdownUserInfo } from "../atoms/CustomDropdownUserInfo";
import { SkeletonDropdownUserInfo } from "../molecules/SkeletonDropdownUserInfo";

const classesLink =
  "relative px-3 py-1 text-gray-700 hover:text-amber-500 transition-colors duration-300 after:block after:h-0.5 after:w-0 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full";

export const Header = () => {
  const { data: userInfo, isLoading } = useUserInfoQuery();
  return (
    <header className="flex justify-between items-center px-6 py-3 mb-8">
      <nav className="flex-1 flex justify-center gap-6 items-center">
        <Link href="/home" className={classesLink}>
          Home
        </Link>
        <Link className={classesLink} href="/contact">
          Contact
        </Link>
        <Link className={classesLink} href="/about">
          About
        </Link>
        <SearchBar />
      </nav>
      {!isLoading && userInfo ? (
        <CustomDropdownUserInfo
          city={userInfo?.city}
          email={userInfo?.email}
          name={userInfo?.name}
          old={userInfo?.old}
          surname={userInfo?.surname}
        />
      ) : (
        <SkeletonDropdownUserInfo />
      )}
    </header>
  );
};
