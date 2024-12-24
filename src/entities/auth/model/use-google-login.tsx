import { useMutation } from '@tanstack/react-query';

import { useAuthStore } from '@/app/_context/auth-store-provider';
import { googleLoginApi } from '@/entities/auth/api/google-login-api';
import useTokenController from '@/entities/auth/model/use-token-controller';
import { useToast } from '@/shared/hooks/use-toast';

function useGoogleLogin() {
  const { toast } = useToast();
  const login = useAuthStore((state) => state.login);
  const tokenController = useTokenController();

  return useMutation({
    mutationFn: async (credential: string) => googleLoginApi(credential),
    onSuccess: (data) => {
      tokenController.setAccessToken(data.accessToken);
      tokenController.setRefreshToken(data.refreshToken);
      tokenController.setExpiresAt(data.expiresAt);
      login();
      toast({ title: 'Welcome!', description: 'Successfully logged in.' });
    },
  });
}

export default useGoogleLogin;
