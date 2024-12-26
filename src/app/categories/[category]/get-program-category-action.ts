import 'server-only';

import { unstable_cache } from 'next/cache';

import db from '@/shared/libs/db';

const select = {
  name: true,
  programs: {
    select: {
      programId: true,
      name: true,
      slug: true,
      shortDesc: true,
    },
    where: { isDraft: false },
  },
};

export const getProgramCategoryAction = unstable_cache(
  async (name: string) => {
    return db.programCategory.findUnique({
      select,
      where: { name },
    });
  },
  [],
  { revalidate: 3600 },
);
