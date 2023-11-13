'use client';
import React from 'react';
import EditProfile from './../../../../components/Profile/EditProfile';
import { IUserInfo } from '@/types/IUserInfo';
import { useStore } from '@/hook/use-store';
import Error404 from '@/components/Layout/Error404';

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data] = useStore<IUserInfo>('userInfo');
  return <div>{data ? <EditProfile editProfile={data} /> : <Error404 />}</div>;
};

export default page;
