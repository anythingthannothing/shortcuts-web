import { useQuery } from '@tanstack/react-query';

import { getProfileInfoApi } from '@/features/user/profile-info/api/get-profile-info-api';
import useAuthentication from '@/shared/hooks/use-authentication';

export const useProfileInfo = () => {
  const isLoggedIn = useAuthentication();
  const {
    isLoading,
    data: profileInfo,
    error,
  } = useQuery({
    queryFn: getProfileInfoApi,
    queryKey: ['profile'],
    enabled: isLoggedIn,
  });

  return { isLoading, profileInfo, error };
};
