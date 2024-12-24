import db from '@/shared/libs/db';

export const getBookmarksAction = async (userId?: number) => {
  if (!userId) {
    return null;
  }

  return db.bookmark.findMany({
    select: {
      userId: true,
      program: {
        select: {
          programId: true,
          name: true,
        },
      },
    },
    where: {
      userId,
    },
  });
};
