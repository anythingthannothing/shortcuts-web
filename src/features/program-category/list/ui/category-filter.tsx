import Link from 'next/link';
import React from 'react';

import { ScrollArea, ScrollBar } from '@/shared/components/ui/scroll-area';
import { categoryInfos } from '@/shared/libs/const/categories';

interface Props {
  categories: string[];
  currentCategory?: string;
}

function CategoryFilter({ categories, currentCategory }: Props) {
  return (
    <section className={''}>
      <ScrollArea>
        <div className="flex gap-6">
          {categories.map((name: string) => {
            const isActive = name === currentCategory;
            const item = categoryInfos[name.toLowerCase()];
            return (
              <Link
                key={item.name}
                href={`/categories/${item.name.toLowerCase()}`}
                className={isActive ? 'border-b-4 border-primary' : ''}
              >
                <article
                  className={`p-2 flex flex-col items-center cursor-pointer duration-300 hover:text-primary`}
                >
                  <item.icon className="w-7 h-7 " />
                  <p className="capitalize text-xs mt-1">{item.name}</p>
                </article>
              </Link>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}

export default CategoryFilter;
