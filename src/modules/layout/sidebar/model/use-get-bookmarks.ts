import { useQuery } from '@tanstack/react-query';

import { getBookmarksApi } from '@/modules/layout/sidebar/api/get-bookmarks-api';
import useAuthentication from '@/shared/hooks/use-authentication';

export const useGetBookmarks = () => {
  const isLoggedIn = useAuthentication();

  const { data, isError } = useQuery({
    queryKey: ['bookmarks'],
    queryFn: getBookmarksApi,
    enabled: isLoggedIn,
    retry: 1,
  });

  return {
    bookmarks: data
      ? data.bookmarks.reduce(
          (acc: Map<number, boolean>, programId: number) => {
            acc.set(programId, true);

            return acc;
          },
          new Map<number, boolean>(),
        )
      : new Map<number, boolean>(),
    isError,
  };
};
