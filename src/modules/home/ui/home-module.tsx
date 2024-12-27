import React from 'react';

import { getProgramCategoriesAction } from '@/app/categories/[category]/get-program-categories-action';
import CategoryFilter from '@/features/program-category/list/ui/category-filter';
import HomeList from '@/modules/home/ui/home-list';

interface Props {
  rankedPrograms: Record<string, any>;
}

async function HomeModule({ rankedPrograms }: Props) {
  const categories = await getProgramCategoriesAction();
  return (
    <section className={'relative flex flex-col flex-1 h-full gap-8'}>
      <CategoryFilter
        categories={categories.map((category) => category.name)}
      />
      {/*TODO: 추천 목록, 인기 목록 등 추가*/}
      {Object.entries(rankedPrograms).map(([key, programs]) => (
        <HomeList title={key} items={programs} key={key} />
      ))}
    </section>
  );
}

export default HomeModule;
