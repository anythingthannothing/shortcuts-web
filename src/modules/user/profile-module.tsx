'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import ProfileForm from '@/features/user/profile-form/ui/profile-form';
import { useProfileInfo } from '@/features/user/profile-info/model/use-profile-info';
import ProfileInfo from '@/features/user/profile-info/ui/profile-info';
import useAuthentication from '@/shared/hooks/use-authentication';

function ProfileModule() {
  const router = useRouter();
  const isLoggedIn = useAuthentication();
  const [isEditMode, setIsEditMode] = useState(false);
  const { isLoading, profileInfo, error } = useProfileInfo();

  const handleClick = () => {
    setIsEditMode(!isEditMode);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/');
    }
  }, [router, isLoggedIn]);

  if (!isLoggedIn) {
    return <></>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!profileInfo) {
    return <></>;
  }

  return (
    <div className={'px-48 py-6'}>
      {isEditMode ? (
        <ProfileForm profileInfo={profileInfo} handleClick={handleClick} />
      ) : (
        <ProfileInfo profileInfo={profileInfo} handleClick={handleClick} />
      )}
    </div>
  );
}

export default ProfileModule;
