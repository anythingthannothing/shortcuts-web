'use client';

import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

import { useToggleBookmark } from '@/features/bookmark/model/use-toggle-bookmark';
import { useGetBookmarks } from '@/modules/layout/sidebar/model/use-get-bookmarks';
import { Button } from '@/shared/components/ui/button';
import useAuthentication from '@/shared/hooks/use-authentication';
import { useToast } from '@/shared/hooks/use-toast';

interface Props {
  programId: number;
}

function ToggleBookmarkForm({ programId }: Props) {
  const isLoggedIn = useAuthentication();
  const { bookmarks } = useGetBookmarks();
  const { toast } = useToast();

  const { mutate, isPending } = useToggleBookmark();

  const handleClick = async (programId: number, isLiked: boolean) => {
    if (!isLoggedIn) {
      toast({
        variant: 'destructive',
        title: 'Login required!',
        description: 'Please login with google account :)',
      });
      return;
    }

    mutate(
      { programId, isLiked },
      {
        onSuccess: () => {
          toast({
            variant: 'default',
            title: 'Success',
            description: `Bookmark successfully ${isLiked ? 'removed from' : 'added to'} the list`,
          });
        },
      },
    );
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="p-2 cursor-pointer"
      disabled={isPending}
      onClick={() =>
        bookmarks && handleClick(programId, bookmarks.has(programId))
      }
    >
      {bookmarks && bookmarks.has(programId) ? (
        <FaStar className={'text-base text-yellow-400 '} />
      ) : (
        <FaRegStar className={'text-base'} />
      )}
    </Button>
  );
}

export default ToggleBookmarkForm;
