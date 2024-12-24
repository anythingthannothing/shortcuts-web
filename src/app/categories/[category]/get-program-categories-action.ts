import 'server-only';

import { unstable_cache } from 'next/cache';

import db from '@/shared/libs/db';

export const getProgramCategoriesAction = unstable_cache(
  async () => {
    return db.programCategory.findMany({
      select: {
        programCategoryId: true,
        name: true,
        order: true,
      },
      orderBy: {
        order: 'asc',
      },
    });
  },
  [],
  { revalidate: 3600 },
);
