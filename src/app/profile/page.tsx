'use client';

import React, { useEffect } from 'react';
import { useStore } from '@/hook/use-store';
import Profile from '@/components/Profile/Profile';
import { ITeachers } from '@/types/ITeachers';

const App = () => {
  const [data] = useStore<ITeachers>('userInfo');
  console.log(data);
  return <Profile infoUser={data} />;
};

export default App;
