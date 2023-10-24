'use client';

import React from 'react';
import { useStore } from '@/hook/use-store';
import Profile from '@/components/Profile/Profile';
import { ITeachers } from '@/types/ITeachers';
import Error404 from '@/components/Error404';

const App = () => {
  const [data] = useStore<ITeachers>('userInfo');
  return <>{data ? <Profile infoUser={data} /> : <Error404 />}</>;
};

export default App;
