import 'server-only';

import { unstable_cache } from 'next/cache';

import db from '@/shared/libs/db';

export const getProgramBySlugAction = async (slug: string) =>
  unstable_cache(
    async () =>
      db.program.findUnique({
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
      }),
    ['programSlug', slug],
    { revalidate: 3600 },
  )();
