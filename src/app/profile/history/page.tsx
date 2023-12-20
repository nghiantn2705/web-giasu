'use client';

import React from 'react';

import Profile from '@/components/Profile/Profile';
import { useStore } from '@/hook/use-store';
import { IUserInfo } from '@/types/IUserInfo';
import RentalHistory from '@/components/History/RentalHistory';

const Page = () => {
  const [data] = useStore<IUserInfo>('userInfo');
  return (
    <div>
      {data ? (
        <Profile infoUser={data}>
          <RentalHistory infoUser={data} />
        </Profile>
      ) : (
        ''
      )}
    </div>
  );
};

export default Page;
