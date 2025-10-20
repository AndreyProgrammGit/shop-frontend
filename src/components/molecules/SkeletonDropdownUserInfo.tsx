import { Skeleton } from "antd";
import React from "react";

export const SkeletonDropdownUserInfo = () => {
  return (
    <div className="flex flex-row gap-2">
      <Skeleton.Avatar active={true} size="large" shape="circle" />
      <Skeleton.Button active={true} size="large" shape="default" />
    </div>
  );
};
