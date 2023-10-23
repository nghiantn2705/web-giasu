'use client';

import React, { useEffect } from 'react';
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
    const refreshToken = localStorage.getItem('refresh_token') || null;
    const accessToken = localStorage.getItem('access_token') || null;
    const ObjectRefreshToken = { refresh_token_id: refreshToken };
    const ObjectAccessToken = { accessToken: accessToken };
    if (ObjectAccessToken) {
      (async () => {
        try {
          const data = await getTokenRefresh(ObjectRefreshToken);
          if (data.access_token) {
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('refresh_token', data.refresh_token);
            if (data?.user) {
              setInfoUser(data?.user);
            }
          }
        } catch (error: any) {
          console.log(error);
        }
      })();
    }
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
