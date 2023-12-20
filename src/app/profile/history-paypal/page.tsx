'use client';

import React from 'react';

import Profile from '@/components/Profile/Profile';
import { useStore } from '@/hook/use-store';
import { IUserInfo } from '@/types/IUserInfo';
import PaypalHistory from '@/components/History/PaypalHistory';

const Page = () => {
  const [data] = useStore<IUserInfo>('userInfo');

  return (
    <div>
      {data ? (
        <Profile infoUser={data}>
          <PaypalHistory infoUser={data} />
        </Profile>
      ) : (
        ''
      )}
    </div>
  );
};

export default Page;
