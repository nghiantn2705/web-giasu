'use client';

import React from 'react';
import { useStore } from '@/hook/use-store';
import Profile from '@/components/Profile/Profile';
import { IUserInfo } from '@/types/IUserInfo';
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
        ''
      )}
    </div>
  );
};

export default App;
