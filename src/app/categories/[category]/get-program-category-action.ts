import 'server-only';

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

export const getProgramCategoryAction = async (name: string) => {
  const programCategory = await db.programCategory.findUnique({
    select,
    where: { name },
  });

  if (!programCategory) {
    throw new Error('Invalid program category id');
  }

  return programCategory;
};
