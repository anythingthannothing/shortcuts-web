import { useAuthStore } from '@/app/_context/auth-store-provider';
import useTokenController from '@/entities/auth/model/use-token-controller';

function UseLogout() {
  const tokenController = useTokenController();
  const logout = useAuthStore((state) => state.logout);

  return () => {
    tokenController.clearTokens();
    logout();
  };
}

export default UseLogout;
