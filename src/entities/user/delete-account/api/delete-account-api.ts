import { Api } from '@/shared/configs/axios/api';

export const deleteAccountApi = async () => {
  await Api.delete('/users');
};
