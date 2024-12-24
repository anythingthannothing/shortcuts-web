import { useMutation, useQueryClient } from '@tanstack/react-query';

import { toggleBookmarkApi } from '@/features/bookmark/api/toggle-bookmark-api';

export const useToggleBookmark = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      programId,
      isLiked,
    }: {
      programId: number;
      isLiked: boolean;
    }) => toggleBookmarkApi({ programId, type: isLiked ? 'remove' : 'add' }),
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({ queryKey: ['bookmarks'] });
    },
  });
};
