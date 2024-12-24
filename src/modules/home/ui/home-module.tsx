import React from 'react';

import HomeList from '@/modules/home/ui/home-list';

interface Props {
  rankedPrograms: Record<string, any>;
}

async function HomeModule({ rankedPrograms }: Props) {
  return (
    <section className={'relative flex flex-col flex-1 h-full gap-8'}>
      {/*TODO: 추천 목록, 인기 목록 등 추가*/}
      {Object.entries(rankedPrograms).map(([key, programs]) => (
        <HomeList title={key} items={programs} key={key} />
      ))}
    </section>
  );
}

export default HomeModule;
