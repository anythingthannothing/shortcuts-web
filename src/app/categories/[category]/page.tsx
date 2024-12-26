import { Metadata } from 'next';
import React from 'react';

import { getProgramCategoriesAction } from '@/app/categories/[category]/get-program-categories-action';
import { getProgramCategoryAction } from '@/app/categories/[category]/get-program-category-action';
import ProgramsByCategoryModule from '@/modules/programs-by-category/programs-by-category-module';

interface ProgramCategory {
  programCategoryId: number;
  name: string;
  order: number;
}

type Params = Promise<{ category: string }>;

interface Props {
  params: Params;
}

export const revalidate = 3600;

export const dynamic = 'force-static';
export const dynamicParams = true;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const name = (await params).category;

  const programCategory = await getProgramCategoryAction(name);

  if (!programCategory) {
    return {};
  }

  return {
    title: programCategory.name,
    description: `${programCategory.name}'s programs`,
  };
}

export async function generateStaticParams() {
  const programCategories: ProgramCategory[] =
    await getProgramCategoriesAction();

  return programCategories.map((programCategory) => ({
    category: programCategory.name,
  }));
}

async function ProgramsByCategoryPage({ params }: { params: Params }) {
  const name = (await params).category;
  const programCategory = await getProgramCategoryAction(name);

  return (
    <ProgramsByCategoryModule
      category={programCategory.name}
      programs={programCategory.programs}
    />
  );
}

export default ProgramsByCategoryPage;
