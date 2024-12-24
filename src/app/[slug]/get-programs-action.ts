import 'server-only';

import db from '@/shared/libs/db';

export const getProgramsAction = async () => {
  return db.program.findMany({
    select: {
      slug: true,
    },
    where: { isDraft: false },
  });
};
