import { Metadata } from 'next';
import React from 'react';

import ProfileModule from '@/modules/user/profile-module';

export const metadata: Metadata = {
  title: 'Profile',
  description: '',
};

function ProfilePage() {
  return <ProfileModule />;
}

export default ProfilePage;
