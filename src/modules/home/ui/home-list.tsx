import React from 'react';

import ProgramCard from '@/features/program/card/ui/program-card';
import { ScrollArea, ScrollBar } from '@/shared/components/ui/scroll-area';

interface Props {
  title: string;
  items: any[];
}

function HomeList({ title, items }: Props) {
  return (
    <section className={'space-y-4'}>
      <h2 className={'text-2xl border-l-4 border-primary pl-3'}>{title}</h2>
      <ScrollArea>
        <div className={'gap-12 flex px-2 py-1'}>
          {items.map((item) => (
            <ProgramCard item={item} key={item.slug} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}

export default HomeList;
