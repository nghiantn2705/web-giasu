'use client';

import React from 'react';
import { useStore } from '@/hook/use-store';
import Profile from '@/components/Profile/Profile';
import { IUserInfo } from '@/types/IUserInfo';
import Error404 from '@/components/Error404';
import InfoUser from '@/components/Profile/InfoUser';

const App = () => {
  const [data] = useStore<IUserInfo>('userInfo');

  return (
    <div>
      {data ? (
        <Profile infoUser={data}>
          <InfoUser infoUser={data} />
        </Profile>
      ) : (
        <Error404 />
      )}
    </div>
  );
};

export default App;
