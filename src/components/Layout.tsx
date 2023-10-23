'use client';

import React, { useEffect } from 'react';
import { Header } from '@/components/index';
import Footer from '@/components/Footer';
import { useStore } from '@/hook/use-store';
interface IProps {
  children: React.ReactNode;
}
const Layout = ({ children }: IProps) => {
  const [infoUser, setInfoUser] = useStore('userInfo');

  useEffect(() => {
    const refreshToken = localStorage.getItem('refresh_token') || '';
    const accessToken = localStorage.getItem('access_token') || '';
    const ObjectRefreshToken = { refresh_token_id: refreshToken };
    const ObjectAccessToken = { accessToken: accessToken };
    if (ObjectAccessToken) {
      const fetchToken = async () => {
        const res = await fetch('http://127.0.0.1:8000/api/auth/refresh', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(ObjectRefreshToken),
        });
        if (res.ok) {
          const data = await res.json();
          if (data.access_token) {
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('refresh_token', data.refresh_token);
            if (data?.user) {
              setInfoUser(data?.user);
            }
          }
        }
      };
      fetchToken();
    }
  }, []);
  return (
    <div>
      <Header userInfo={infoUser} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
