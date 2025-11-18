import { useTelegramUserInfoQuery } from "@/lib/api/user/userApi";

export const useUserInfo = () => {
  const { data: userInfo, isLoading } = useTelegramUserInfoQuery();

  return { userInfo, isLoading };
};
