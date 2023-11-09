'use client';
import React from 'react';

import EditProfile from '@/components/Profile/EditProfile';
import { useStore } from '@/hook/use-store';
import { IUserInfo } from '@/types/IUserInfo';

const App = () => {
  const [data] = useStore<IUserInfo>('userInfo');

  return <div>{data ? <EditProfile editProfile={data} /> : ''}</div>;
};

export default App;
