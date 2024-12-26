import { redirect } from 'next/navigation';
import React from 'react';

import { getProgramBySlugAction } from '@/app/[slug]/get-program-by-slug-action';
import SlugArticle from '@/features/program/detail/ui/slug-article';
import SlugAside from '@/features/program/detail/ui/slug-aside';

interface Props {
  slug: string;
}

async function ProgramDetailModule({ slug }: Props) {
  const program = await getProgramBySlugAction(slug);

  if (!program) {
    redirect('/');
  }

  return (
    <section className={'lg:grid lg:grid-cols-12 gap-8 relative'}>
      <SlugArticle program={program} slug={slug} />
      <SlugAside program={program} />
    </section>
  );
}

export default ProgramDetailModule;
