import React from 'react';

import { Skeleton } from '@/shared/components/ui/skeleton';

const dummyData = [3, 3, 4, 5, 6];

export const CategoriesSkeleton = () => {
  return (
    <div className={'flex flex-col gap-2'}>
      <Skeleton className={'w-full h-24'}></Skeleton>
      {dummyData.map((count, i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="h-6 w-[40%]" />
          {Array.from({ length: count }, (_, i) => (
            <Skeleton key={i} className="h-5 w-[50%]" />
          ))}
        </div>
      ))}
    </div>
  );
};
