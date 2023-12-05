'use client';

import React, { useEffect } from 'react';

import { IUserInfo } from '@/types/IUserInfo';
import Link from 'next/link';
import { BiHistory } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';

interface IProps {
  infoUser: IUserInfo;
  children: React.ReactNode;
}
const Profile = ({ children }: IProps) => {
  useEffect(() => {}, []);
  return (
    <>
      <div className={'bg-gray-100 min-h-fit flex'}>
        <div
          className={'bg-white w-80 px-4 py-8 border-r-2 flex flex-col gap-4 '}
        >
          <a
            href={`/profile`}
            className={
              'flex items-center gap-2 border bg-white drop-shadow-md hover:bg-gray-200 rounded-lg cursor-pointer px-3 py-2'
            }
          >
            <FiSettings />
            Chỉnh sửa thông tin
          </a>
          <a
            href={`/profile/history`}
            className={
              'flex items-center gap-2 border bg-white drop-shadow-md hover:bg-gray-200 rounded-lg cursor-pointer px-3 py-2'
            }
          >
            <BiHistory />
            Lịch sử thuê
          </a>
          <Link
            href={'/profile/history-connect'}
            className={
              'flex items-center gap-2 border bg-white drop-shadow-md hover:bg-gray-200 rounded-lg cursor-pointer px-3 py-2'
            }
          >
            <BiHistory />
            Xác nhận dạy
          </Link>

          <Link
            href={'/profile/history-paypal'}
            className={
              'flex items-center gap-2 border bg-white drop-shadow-md hover:bg-gray-200 rounded-lg cursor-pointer px-3 py-2'
            }
          >
            <BiHistory />
            Lịch sử giao dịch
          </Link>
        </div>
        <div className={'container'}>{children}</div>
      </div>
    </>
  );
};

export default Profile;
