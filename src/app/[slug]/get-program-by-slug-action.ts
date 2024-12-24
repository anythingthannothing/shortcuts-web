import 'server-only';

import db from '@/shared/libs/db';

export default async function getProgramBySlugAction(slug: string) {
  return db.program.findUnique({
    select: {
      programId: true,
      programCategory: {
        select: {
          name: true,
        },
      },
      name: true,
      likes: true,
      supportWindow: true,
      supportMac: true,
      additionalInfo: {
        select: {
          make: true,
          notice: true,
          longDesc: true,
          homepageUrl: true,
        },
      },
      relatedContents: {
        select: {
          relatedContentId: true,
          title: true,
          type: true,
          url: true,
        },
      },
      shortcutCategories: {
        select: {
          name: true,
          shortcuts: {
            select: {
              shortcutId: true,
              winKey: true,
              macKey: true,
              recommended: true,
              description: true,
              likes: true,
            },
          },
        },
      },
    },
    where: { slug },
  });
}
