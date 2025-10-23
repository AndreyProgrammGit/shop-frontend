import React from "react";
import { SearchBar } from "@molecules/SearchBar";
import Link from "next/link";
import {
  useTelegramUserInfoQuery,
  useUserInfoQuery,
} from "@/lib/api/user/userApi";
import { CustomDropdownUserInfo } from "../atoms/CustomDropdownUserInfo";
import { SkeletonDropdownUserInfo } from "../molecules/SkeletonDropdownUserInfo";

const classesLink =
  "relative px-3 py-1 text-gray-700 hover:text-amber-500 transition-colors duration-300 after:block after:h-0.5 after:w-0 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full";

export const Header = () => {
  const { data: userInfo, isLoading } = useTelegramUserInfoQuery();
  console.log(userInfo);
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
      {!isLoading && userInfo ? (
        <CustomDropdownUserInfo
          // city={userInfo?.city}
          // email={userInfo?.email}
          // name={userInfo?.name}
          // old={userInfo?.old}
          // surname={userInfo?.surname}
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
