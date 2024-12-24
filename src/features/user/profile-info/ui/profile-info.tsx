import React from 'react';
import { FaRegEdit } from 'react-icons/fa';

import { DeleteAccountButton } from '@/entities/user/delete-account/ui/delete-account-button';
import { ProfileItem } from '@/entities/user/profile/ui/profile-item';
import { Switch } from '@/shared/components/form/switch';
import { Button } from '@/shared/components/ui/button';

interface Props {
  profileInfo: any;
  handleClick: () => void;
}

function ProfileInfo({ profileInfo, handleClick }: Props) {
  return (
    <>
      <div className={'flex justify-between items-center gap-4 mb-6'}>
        <h2 className={'text-2xl'}>Profile</h2>
        <Button type={'button'} variant={'outline'} onClick={handleClick}>
          <FaRegEdit className={'text-xl'} />
        </Button>
      </div>
      <div className="space-y-4">
        <ProfileItem label="Email" value={profileInfo.email} />
        <ProfileItem
          label="Nickname"
          value={profileInfo.nickname || 'Unnamed'}
        />
        <ProfileItem label="Job" value={profileInfo.job || 'Not selected'} />
        <div className="flex items-center gap-4">
          <p className="w-1/4 font-medium py-1 text-muted-foreground text-lg">
            Prefers Mac
          </p>
          <Switch checked={profileInfo.prefersMac} />
        </div>
        <ProfileItem
          label="Joined at"
          value={new Date(profileInfo.createdAt).toLocaleDateString()}
        />
        <DeleteAccountButton />
      </div>
    </>
  );
}

export default ProfileInfo;
