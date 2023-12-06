'use client';
import React from 'react';
import EditProfile from '../../../../components/Profile/(EditProfile)/EditProfile';
import { IUserInfo } from '@/types/IUserInfo';
import { useStore } from '@/hook/use-store';
import Error404 from '@/components/Layout/Error404';
import EditProfileTeacher from '@/components/Profile/(EditProfile)/EditProfileTeacher';

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data] = useStore<IUserInfo>('userInfo');
  if (data?.role === 'user') {
    return (
      <div>{data ? <EditProfile editProfile={data} /> : <Error404 />}</div>
    );
  } else if (data?.role === 'teacher') {
    return (
      <div>
        {data ? <EditProfileTeacher editProfile={data} /> : <Error404 />}
      </div>
    );
  }
};

export default page;
