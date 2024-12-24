import { Api } from '@/shared/configs/axios/api';

export interface ToggleBookmarkApiReqDto {
  programId: number;
  type: 'add' | 'remove';
}

export const toggleBookmarkApi = async (
  dto: ToggleBookmarkApiReqDto,
): Promise<void> => {
  await Api.post('/bookmarks/toggle', dto);
};
