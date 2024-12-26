import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import React from 'react';

import { getProgramBySlugAction } from '@/app/[slug]/get-program-by-slug-action';
import { getProgramsAction } from '@/app/[slug]/get-programs-action';
import SlugArticle from '@/features/program/detail/ui/slug-article';
import SlugAside from '@/features/program/detail/ui/slug-aside';

interface Program {
  slug: string;
}

type Params = Promise<{ slug: string }>;

type Props = {
  params: Params;
};

export const revalidate = 3600;

export const dynamic = 'force-static';
export const dynamicParams = true;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;

  const program = await getProgramBySlugAction(slug);

  if (!program) {
    return {};
  }

  return {
    title: program.name,
    description: `${program.name}'s shortcuts`,
  };
}

export async function generateStaticParams() {
  const programs: Program[] = await getProgramsAction();

  return programs.map((program) => ({
    slug: program.slug,
  }));
}

async function ProgramDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
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

export default ProgramDetailPage;
