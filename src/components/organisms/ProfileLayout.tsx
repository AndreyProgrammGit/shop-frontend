"use client";
import React from "react";
import { UserListInfo } from "../molecules/UserListInfo";
import { useUserInfo } from "@/hooks/useUserInfo";

export const ProfileLayout = () => {
  const { userInfo } = useUserInfo();

  if (!userInfo) {
    return <div>User not Found</div>;
  }

  return (
    <div className="flex justify-center">
      <UserListInfo
        username={userInfo.username}
        firstName={userInfo.firstName}
        lastName={userInfo.lastName}
      />
    </div>
  );
};
