import React, { FC } from "react";
import { CustomDropdownUserInfoProps } from "./types/CustomDropdownUserInfo";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { CustomButton } from "./CustomButton";
import { useDispatch } from "react-redux";
import { logout } from "@/lib/slices/AuthSlice";

export const CustomDropdownUserInfo: FC<CustomDropdownUserInfoProps> = ({
  // email,
  // city,
  // name,
  // old,
  // surname,
  firstname,
  lastname,
  username,
}) => {
  const dispatch = useDispatch();

  const handleClickLogout = () => {
    dispatch(logout());
  };

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
    // {
    //   key: "1",
    //   label: (
    //     <span className="text-gray-700 font-medium">
    //       📧 Email: <span className="text-amber-600">{email}</span>
    //     </span>
    //   ),
    // },
    // {
    //   key: "2",
    //   label: (
    //     <span className="text-gray-700 font-medium">
    //       🧍 Name: <span className="text-amber-600">{name}</span>
    //     </span>
    //   ),
    // },
    // {
    //   key: "3",
    //   label: (
    //     <span className="text-gray-700 font-medium">
    //       👤 Surname: <span className="text-amber-600">{surname}</span>
    //     </span>
    //   ),
    // },
    // {
    //   key: "4",
    //   label: (
    //     <span className="text-gray-700 font-medium">
    //       🎂 Age: <span className="text-amber-600">{old}</span>
    //     </span>
    //   ),
    // },
    // {
    //   key: "5",
    //   label: (
    //     <span className="text-gray-700 font-medium">
    //       🏙 City:{" "}
    //       <span className="text-amber-600">{city ? city : "Unknown"}</span>
    //     </span>
    //   ),
    // },
    // {
    //   key: "6",
    //   label: (
    //     <div className="flex justify-center">
    //       <CustomButton type="primary" danger onClick={handleClickLogout}>
    //         Logout
    //       </CustomButton>
    //     </div>
    //   ),
    // },
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
