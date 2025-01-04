import React from 'react';

interface Props {
  src: string | null;
}

export const ProfileImage = ({ src }: Props) => {
  if (!src) {
    return <p className={'w-3/4 font-normal text-lg py-1'}>No Profile Image</p>;
  }

  return (
    <img
      src={`${process.env.NEXT_PUBLIC_CDN_URL}/origins/${src}`}
      alt={"user's profile image"}
      width={200}
      height={200}
      className={'rounded-full border-2 border-gray-600'}
    />
  );
};
