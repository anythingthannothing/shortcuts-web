import React from 'react';

import ProgramCard from '@/features/program/card/ui/program-card';

interface Props {
  category: string;
  programs: any[];
}

async function HomeModule({ category, programs }: Props) {
  return (
    <section className={'flex gap-12'}>
      {programs.map((program) => (
        <ProgramCard key={program.programId} item={program} />
      ))}
    </section>
  );
}

export default HomeModule;
