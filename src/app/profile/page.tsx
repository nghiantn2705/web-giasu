'use client';

import React from 'react';
import { useStore } from '@/hook/use-store';
import Profile from '@/components/Profile/Profile';
import { IUserInfo } from '@/types/IUserInfo';
import InfoUser from '@/components/Profile/InfoUser';
import { useRouter } from 'next/navigation';

const App = () => {
  const router = useRouter();
  const [data] = useStore<IUserInfo>('userInfo');
  if (!data) {
    router.push('/auth/user');
  }
  return (
    <div>
      <Profile infoUser={data}>
        <InfoUser infoUser={data} />
      </Profile>
    </div>
  );
};

export default App;
