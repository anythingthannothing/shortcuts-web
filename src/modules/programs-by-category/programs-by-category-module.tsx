import { getProgramCategoriesAction } from '@/app/categories/[category]/get-program-categories-action';
import { getProgramCategoryAction } from '@/app/categories/[category]/get-program-category-action';
import ProgramCard from '@/features/program/card/ui/program-card';
import CategoryFilter from '@/features/program-category/list/ui/category-filter';

interface Props {
  category: string;
}

async function ProgramsByCategoryModule({ category }: Props) {
  const categories = await getProgramCategoriesAction();
  const programCategory = await getProgramCategoryAction(category);
  return (
    <div className={'flex flex-col gap-8'}>
      <CategoryFilter
        categories={categories.map((category) => category.name)}
        currentCategory={category}
      />
      <section className={'flex gap-12'}>
        {programCategory?.programs.map((program) => (
          <ProgramCard key={program.programId} item={program} />
        ))}
      </section>
    </div>
  );
}

export default ProgramsByCategoryModule;
