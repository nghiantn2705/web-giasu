'use client';

import React, { useEffect } from 'react';
import { Header } from '@/components';
import Footer from '@/components/Layout/Footer';
import { useStore } from '@/hook/use-store';
import { getTokenRefresh } from '@/services';
import { getCookie, setCookie } from 'cookies-next';

interface IProps {
  children: React.ReactNode;
}
const Layout = ({ children }: IProps) => {
  const [infoUser, setInfoUser] = useStore('userInfo');

  useEffect(() => {
    const refreshToken = getCookie('refresh_token');
    const accessToken = getCookie('access_token');
    const ObjectRefreshToken = { refresh_token_id: refreshToken };
    const ObjectAccessToken = { accessToken: accessToken };

    (async () => {
      try {
        if (ObjectAccessToken) {
          const res = await getTokenRefresh(ObjectRefreshToken);
          if (res?.access_token) {
            setCookie('access_token', res?.access_token);
            setCookie('refresh_token', res?.refresh_token);
            window.localStorage.setItem('access_token', res?.access_token);
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
    </>
  );
};

export default Layout;
