import { jobEnum } from '@/features/user/profile-form/model/jobs.const';
import { Api } from '@/shared/configs/axios/api';

interface GetProfileInfoApiRes {
  email: string;
  nickname: string | null;
  job: jobEnum | null;
  prefersMac: boolean;
  createdAt: Date;
}

export const getProfileInfoApi = async (): Promise<GetProfileInfoApiRes> => {
  const res = await Api.get<GetProfileInfoApiRes>('/users/me');

  return res.data;
};
