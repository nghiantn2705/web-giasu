'use client';

import React from 'react';

import Profile from '@/components/Profile/Profile';
import { useStore } from '@/hook/use-store';
import { IUserInfo } from '@/types/IUserInfo';
import RentalHistory from '@/components/History/RentalHistory';
import Error404 from '@/components/Layout/Error404';

const Page = () => {
  const [data] = useStore<IUserInfo>('userInfo');
  return (
    <div>
      {data ? (
        <Profile infoUser={data}>
          <RentalHistory infoUser={data} />
        </Profile>
      ) : (
        <Error404 />
      )}
    </div>
  );
};

export default Page;
