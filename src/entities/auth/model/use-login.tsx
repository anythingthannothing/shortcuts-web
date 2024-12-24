import { useAuthStore } from '@/app/_context/auth-store-provider';
import useTokenController from '@/entities/auth/model/use-token-controller';

function UseLogin() {
  const tokenController = useTokenController();
  const login = useAuthStore((state) => state.login);

  return (accessToken: string, refreshToken: string, expiresAt: number) => {
    tokenController.setAccessToken(accessToken);
    tokenController.setRefreshToken(refreshToken);
    tokenController.setExpiresAt(expiresAt);
    login();
  };
}

export default UseLogin;
