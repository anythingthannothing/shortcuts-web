'use client';

import React, { useEffect } from 'react';

import Bookmarks from '@/features/bookmark/ui/bookmarks';
import Search from '@/features/program/search/ui/search';
import Categories from '@/features/program-category/list/ui/categories';
import { useGetBookmarks } from '@/modules/layout/sidebar/model/use-get-bookmarks';
import { useToast } from '@/shared/hooks/use-toast';

interface Props {
  programCategories: any[];
}

function Sidebar({ programCategories }: Props) {
  const { toast } = useToast();
  const { bookmarks, isError } = useGetBookmarks();

  useEffect(() => {
    if (isError) {
      toast({
        title: 'Failed to fetch bookmarks.',
      });
    }
  }, [toast, isError]);

  return (
    <>
      <Search
        programs={programCategories.flatMap((programCategory) => {
          return programCategory.programs.map((program: any) => program);
        })}
      />
      {/*{isLoading ? (*/}
      {/*  <CategoriesSkeleton />*/}
      {/*) : (*/}
      <>
        <Bookmarks
          bookmarkedPrograms={programCategories.flatMap(
            (programCategory: any) => {
              return programCategory.programs.filter((program: any) =>
                bookmarks.has(program.programId),
              );
            },
          )}
        />
        <Categories
          programCategories={programCategories}
          bookmarks={bookmarks}
        />
      </>
      {/*)}*/}
    </>
  );
}

export default Sidebar;
