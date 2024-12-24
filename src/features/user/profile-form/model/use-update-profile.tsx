import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateProfileApi } from '@/features/user/profile-form/api/update-profile-api';
import { UpdateProfileFormValues } from '@/features/user/profile-form/model/update-profile-form-schema';

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: UpdateProfileFormValues) => updateProfileApi(dto),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });
};
