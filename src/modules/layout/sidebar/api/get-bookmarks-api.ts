import { Api } from '@/shared/configs/axios/api';

export const getBookmarksApi = async () => {
  const res = await Api.get<{ bookmarks: number[] }>('/bookmarks');

  return res.data;
};
