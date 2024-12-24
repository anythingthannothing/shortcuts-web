import { Skeleton } from '@/shared/components/ui/skeleton';

interface Props {
  count: number;
}

export const SearchSkeleton = ({ count = 5 }: Props) => {
  return (
    <>
      {Array.from({ length: count }, (v, i) => i).map((v) => (
        <li key={v} className={'px-1'}>
          <Skeleton className="h-5 w-[70%]" />
        </li>
      ))}
    </>
  );
};
