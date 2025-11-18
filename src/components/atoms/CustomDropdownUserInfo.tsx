import React, { FC } from "react";
import { CustomDropdownUserInfoProps } from "./types/CustomDropdownUserInfo";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useRouter } from "next/navigation";
import { CustomButton } from "./CustomButton";

export const CustomDropdownUserInfo: FC<CustomDropdownUserInfoProps> = ({
  firstname,
  lastname,
  username,
}) => {
  const route = useRouter();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <span className="text-gray-700 font-medium">
          📧 Username: <span className="text-amber-600">{username}</span>
        </span>
      ),
    },
    {
      key: "2",
      label: (
        <span className="text-gray-700 font-medium">
          🧍 Name: <span className="text-amber-600">{firstname}</span>
        </span>
      ),
    },
    {
      key: "3",
      label: (
        <span className="text-gray-700 font-medium">
          👤 Surname: <span className="text-amber-600">{lastname}</span>
        </span>
      ),
    },
    {
      key: "4",
      label: (
        <CustomButton onClick={() => route.push("/profile")}>
          Go to profile
        </CustomButton>
      ),
    },
    {
      key: "5",
      label: <TonConnectButton />,
    },
  ];

  return (
    <Dropdown
      menu={{ items }}
      overlayClassName="custom-dropdown"
      placement="bottomRight"
      arrow
    >
      <Space className="cursor-pointer rounded-full px-3 py-1 hover:bg-amber-50 transition-colors duration-200">
        {/* <Image
          src="/images/avatar.svg"
          width={28}
          height={28}
          alt="avatar"
          className="rounded-full border border-amber-500 p-0.5"
        /> */}
        <UserOutlined
          style={{ color: "orange" }}
          className="rounded-full border border-amber-600 p-0.5"
        />
        <span className="text-amber-600 font-medium">{username}</span>
        <DownOutlined style={{ color: "orange" }} />
      </Space>
    </Dropdown>
  );
};
