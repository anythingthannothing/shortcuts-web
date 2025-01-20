import { Api } from '@/shared/configs/axios/api';

export interface IUpdateProfileImageApiRequest {
  thumbnailUrl: string;
}

export const updateProfileImageApi = async (
  dto: IUpdateProfileImageApiRequest,
) => {
  await Api.patch('/users', dto);
};
