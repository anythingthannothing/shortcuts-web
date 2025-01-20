import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateProfileImageApi } from '@/entities/user/profile/api/update-profile-image-api';

export const useUpdateProfileImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (key: string) => updateProfileImageApi({ thumbnailUrl: key }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });
};
