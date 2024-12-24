import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { SearchSkeleton } from '@/features/program/search/ui/search-skeleton';
import { Input } from '@/shared/components/form/input';
import { useKey } from '@/shared/hooks/use-key';
import { useOutsideClick } from '@/shared/hooks/use-outside-click';

function Search({ programs }: any) {
  const [query, setQuery] = useState<string>('');
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filteredPrograms, setFilteredPrograms] = useState<any[]>([]);

  const handleOutsideClick = (event: MouseEvent) => {
    setQuery('');
    setIsDropdownVisible(false);
  };

  const ref = useOutsideClick(handleOutsideClick);

  const handleKeyDown = () => {
    setQuery('');
    setIsDropdownVisible(false);
  };

  useKey('Escape', handleKeyDown);

  useEffect(() => {
    if (query.trim()) {
      setIsLoading(true);
      const filtered = programs.filter((program: any) =>
        program.name.toLowerCase().includes(query.toLowerCase()),
      );
      setTimeout(() => {
        setFilteredPrograms(filtered);
        setIsLoading(false);
      }, 300);
    } else {
      setFilteredPrograms([]);
    }
  }, [query, programs]);

  return (
    <section ref={ref} className={'relative'}>
      <Input
        type={'text'}
        placeholder={'🔍 find any program!'}
        className={'width-full dark:bg-muted border-border'}
        maxLength={20}
        value={query}
        onFocus={() => setIsDropdownVisible(true)}
        onChange={(e) => {
          setQuery(e.target.value);
          if (query.length > 0) {
            setIsDropdownVisible(true);
          }
        }}
      />
      {isDropdownVisible && query.length > 0 && (
        <ul
          className={`flex flex-col gap-2 absolute p-2 mt-2 border-2 border-border bg-background w-full rounded-sm`}
        >
          {isLoading ? (
            <SearchSkeleton count={5} />
          ) : filteredPrograms.length ? (
            filteredPrograms.map((program: any) => (
              <li
                key={program.programId}
                onClick={() => setIsDropdownVisible(false)}
              >
                <Link href={`/${program.slug}`} className={'text-sm px-1'}>
                  {program.name}
                </Link>
              </li>
            ))
          ) : (
            <li>
              <p className={'text-sm leading-7'}>
                No results found.
                <br />
                Try with different keywords.
              </p>
            </li>
          )}
        </ul>
      )}
    </section>
  );
}

export default Search;
