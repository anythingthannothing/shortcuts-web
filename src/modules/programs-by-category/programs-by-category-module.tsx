import { getProgramCategoriesAction } from '@/app/categories/[category]/get-program-categories-action';
import ProgramCard from '@/features/program/card/ui/program-card';
import CategoryFilter from '@/features/program-category/list/ui/category-filter';

interface Props {
  category: string;
  programs: any[];
}

async function ProgramsByCategoryModule({ programs, category }: Props) {
  const categories = await getProgramCategoriesAction();
  return (
    <div className={'flex flex-col gap-8'}>
      <CategoryFilter
        categories={categories.map((category) => category.name)}
        currentCategory={category}
      />
      <section className={'flex gap-12'}>
        {programs.map((program) => (
          <ProgramCard key={program.programId} item={program} />
        ))}
      </section>
    </div>
  );
}

export default ProgramsByCategoryModule;
