'use client';

import React from 'react';

import Profile from '@/components/Profile/Profile';
import { useStore } from '@/hook/use-store';
import { IUserInfo } from '@/types/IUserInfo';
import ConnectHistory from '@/components/History/ConnectHistory';

const Page = () => {
  const [data] = useStore<IUserInfo>('userInfo');
  return (
    <div>
      {data ? (
        <Profile infoUser={data}>
          <ConnectHistory infoUser={data} />
        </Profile>
      ) : (
        ''
      )}
    </div>
  );
};

export default Page;
