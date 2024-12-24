import React from 'react';

import CategoryItem from '@/features/program-category/list/ui/category-item';

function Categories({
  programCategories,
}: {
  programCategories: any[];
  bookmarks: Map<number, boolean>;
}) {
  return (
    <>
      {programCategories.map((programCategory) => (
        <div key={programCategory.name}>
          <h3 className={'text-base mb-1'}>
            {programCategory.name} ({programCategory.programs.length})
          </h3>
          <ol className={'space-y-1 px-1'}>
            {programCategory.programs.map((program: any) => (
              <CategoryItem
                key={program.programId}
                programId={program.programId}
                slug={program.slug}
                name={program.name}
              />
            ))}
          </ol>
        </div>
      ))}
    </>
  );
}

export default Categories;
