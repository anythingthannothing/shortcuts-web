import 'server-only';

import { unstable_cache } from 'next/cache';

import db from '@/shared/libs/db';

export const getProgramsAction = unstable_cache(
  async () => {
    return db.program.findMany({
      select: {
        slug: true,
      },
      where: { isDraft: false },
    });
  },
  [],
  { revalidate: 3600 },
);
