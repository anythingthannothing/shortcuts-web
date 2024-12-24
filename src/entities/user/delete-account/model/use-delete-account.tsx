import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { useAuthStore } from '@/app/_context/auth-store-provider';
import useTokenController from '@/entities/auth/model/use-token-controller';
import { deleteAccountApi } from '@/entities/user/delete-account/api/delete-account-api';
import { useToast } from '@/shared/hooks/use-toast';

export const useDeleteAccount = () => {
  const router = useRouter();
  const { toast } = useToast();
  const tokenController = useTokenController();
  const logout = useAuthStore((state) => state.logout);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteAccountApi,
    onSuccess: async () => {
      tokenController.clearTokens();
      logout();
      queryClient.removeQueries({ queryKey: ['profile'] });
      toast({
        title: "We're sad to see you go.",
        description:
          "Your account has been successfully deleted. We're sorry to see you leave!",
      });
      router.push('/');
    },
    onError: (error) => {
      toast({
        variant: 'destructive',
        title: 'Unexpected error occurred.',
        description: 'Please try again later',
      });
    },
  });
};
