'use client';

import React, { useEffect, useState } from 'react';
import { Header } from '@/components/index';
import Footer from '@/components/Footer';
import { useStore } from '@/hook/use-store';
import { getTokenRefresh } from '@/services';
interface IProps {
  children: React.ReactNode;
}
const Layout = ({ children }: IProps) => {
  const [infoUser, setInfoUser] = useStore('userInfo');

  useEffect(() => {
    const refreshToken = localStorage.getItem('refresh_token');
    const accessToken = localStorage.getItem('access_token');
    const ObjectRefreshToken = { refresh_token_id: refreshToken };
    const ObjectAccessToken = { accessToken: accessToken };
    (async () => {
      try {
        if (ObjectAccessToken) {
          const res = await getTokenRefresh(ObjectRefreshToken);
          if (res?.access_token) {
            localStorage.setItem('access_token', res?.access_token);
            localStorage.setItem('refresh_token', res?.refresh_token);
            if (res?.user) {
              setInfoUser(res?.user);
            }
          }
        }
      } catch (ex: any) {
        console.log(ex);
      }
    })();
  }, []);
  return (
    <>
      <Header userInfo={infoUser} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
