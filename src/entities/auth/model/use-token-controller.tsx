import { useAuthStore } from '@/app/_context/auth-store-provider';
import { TokenController } from '@/shared/libs/token-controller';

function useTokenController(): TokenController {
  let authStore = useAuthStore((state) => state);

  return authStore.tokenController!;
}

export default useTokenController;
