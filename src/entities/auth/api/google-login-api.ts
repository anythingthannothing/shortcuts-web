import { Api } from '@/shared/configs/axios/api';

export interface GoogleLoginApiRes {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

export const googleLoginApi = async (credential: string) => {
  const res = await Api.post<GoogleLoginApiRes>('/auth/google', { credential });

  return res.data;
};
