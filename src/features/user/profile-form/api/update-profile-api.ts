import { UpdateProfileFormValues } from '@/features/user/profile-form/model/update-profile-form-schema';
import axiosInstance from '@/shared/configs/axios/api';

export const updateProfileApi = async (
  dto: UpdateProfileFormValues,
): Promise<void> => {
  await axiosInstance.patch<void>('/users', dto);
};
