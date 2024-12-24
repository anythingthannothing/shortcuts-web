import { unstable_cache } from 'next/cache';

import db from '@/shared/libs/db';

const select = {
  name: true,
  programs: {
    select: {
      programId: true,
      name: true,
      slug: true,
    },
    where: {
      isDraft: false,
    },
  },
};

export const getAllProgramsAction = unstable_cache(
  async () => {
    return db.programCategory.findMany({
      select,
      orderBy: [{ order: 'asc' }],
    });
  },
  [],
  { revalidate: 3600 },
);
