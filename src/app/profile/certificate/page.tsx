'use client';

import React from 'react';
import { useStore } from '@/hook/use-store';
import { IUserInfo } from '@/types/IUserInfo';
import Certificate from '@/components/Certificate/Certificate';
import Profile from '@/components/Profile/Profile';

const Page = () => {
  const [data] = useStore<IUserInfo>('userInfo');
  return (
    <div>
      {data ? (
        <Profile infoUser={data}>
          <Certificate infoUser={data} />
        </Profile>
      ) : (
        ''
      )}
    </div>
  );
};

export default Page;
