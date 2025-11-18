"use client";
import React, { FC } from "react";
import { UserListInfoProps } from "./types/UserListInfoProps";
import { Card, Col, Flex, Typography, Tag } from "antd";
import { useTonAddress, TonConnectButton } from "@tonconnect/ui-react";
import {
  UserOutlined,
  WalletOutlined,
  CheckCircleTwoTone,
  CloseCircleTwoTone,
} from "@ant-design/icons";

const { Text, Title } = Typography;

export const UserListInfo: FC<UserListInfoProps> = ({
  lastName,
  firstName,
  username,
}) => {
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);

  const isConnected = Boolean(userFriendlyAddress);

  return (
    <Card className="max-w-xl w-full shadow-md rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-amber-100 p-6">
      <Flex justify="space-between" align="center" className="mb-4">
        <Flex align="center" gap={8}>
          <UserOutlined style={{ fontSize: 22, color: "#d97706" }} />
          <Title level={4} className="!mb-0 text-orange-700">
            User Info
          </Title>
        </Flex>

        {isConnected ? (
          <Tag
            color="green"
            icon={<CheckCircleTwoTone twoToneColor="#52c41a" />}
          >
            Wallet connected
          </Tag>
        ) : (
          <Tag color="red" icon={<CloseCircleTwoTone twoToneColor="#f5222d" />}>
            Wallet not connected
          </Tag>
        )}
      </Flex>

      <Flex justify="space-between" wrap="wrap" gap={16}>
        <Col>
          <Text strong className="block text-lg text-amber-800">
            Username:
          </Text>
          <Text className="block mb-2 text-orange-700">{username || "—"}</Text>

          <Text strong className="block text-lg text-amber-800">
            First Name:
          </Text>
          <Text className="block mb-2 text-orange-700">{firstName || "—"}</Text>

          <Text strong className="block text-lg text-amber-800">
            Last Name:
          </Text>
          <Text className="block text-orange-700">{lastName || "—"}</Text>
        </Col>

        <Col className="min-w-[250px]">
          <Flex align="center" gap={8} className="mb-2">
            <WalletOutlined style={{ fontSize: 20, color: "#b45309" }} />
            <Text strong className="text-lg text-amber-800">
              Wallet:
            </Text>
          </Flex>

          {!isConnected ? (
            <div className="flex flex-col items-start gap-2">
              <Text className="text-red-500">
                Please connect your TON wallet to see address info
              </Text>
              <TonConnectButton />
            </div>
          ) : (
            <>
              <Text className="block text-orange-700 break-all">
                <strong>User-friendly:</strong> {userFriendlyAddress}
              </Text>
              <Text className="block text-orange-700 break-all">
                <strong>Raw:</strong> {rawAddress}
              </Text>
            </>
          )}
        </Col>
      </Flex>
    </Card>
  );
};
