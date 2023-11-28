'use client';

import React from 'react';

import Profile from '@/components/Profile/Profile';
import { useStore } from '@/hook/use-store';
import { IUserInfo } from '@/types/IUserInfo';
import Error404 from '@/components/Layout/Error404';
import ConnectHistory from '@/components/Profile/ConnectHistory';

const Page = () => {
  const [data] = useStore<IUserInfo>('userInfo');
  return (
    <div>
      {data ? (
        <Profile infoUser={data}>
          <ConnectHistory infoUser={data} />
        </Profile>
      ) : (
        <Error404 />
      )}
    </div>
  );
};

export default Page;
