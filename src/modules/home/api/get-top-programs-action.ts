'use server';

import db from '@/shared/libs/db';

interface RankedRawProgram {
  program_id: number;
  name: string;
  slug: string;
  short_desc: string;
  category: string;
  _order: number;
}

interface RankedProgram {
  programId: number;
  name: string;
  slug: string;
  shortDesc: string;
  category: string;
  order: number;
}

export const getTopProgramsAction = async () => {
  const result = (await db.$queryRaw`
    WITH RankedPrograms AS (
      SELECT 
        a.*, b.order as _order,
        ROW_NUMBER() OVER (PARTITION BY a.category ORDER BY a.likes DESC) AS rank
      FROM program a
      JOIN program_category b
      ON a.program_category_id = b.program_category_id
      WHERE is_draft = false
    )
    SELECT program_id, category, name, slug, short_desc, _order
    FROM RankedPrograms
    WHERE rank <= 3
    ORDER BY 6 ASC;
  `) as unknown as RankedRawProgram[];

  return result.reduce(
    (acc: Record<string, RankedProgram[]>, program: RankedRawProgram) => {
      if (!acc[program.category]) {
        acc[program.category] = [];
      }
      acc[program.category].push({
        programId: program.program_id,
        name: program.name,
        slug: program.slug,
        shortDesc: program.short_desc,
        order: program._order,
        category: program.category,
      });

      return acc;
    },
    {},
  );
};
