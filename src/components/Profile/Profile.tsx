'use client';

import React, { useEffect } from 'react';

import Link from 'next/link';
import { IUserInfo } from '@/types/IUserInfo';
import Paypal from '@/components/Profile/Paypal';

interface IProps {
  infoUser: IUserInfo;
  children: React.ReactNode;
}
const Profile = ({ infoUser, children }: IProps) => {
  useEffect(() => {}, []);
  return (
    <>
      {infoUser ? (
        <div className={'bg-gray-100 min-h-fit'}>
          <div className={'container mx-auto py-8'}>
            <div className={'grid grid-cols-4 sm:grid-cols-12 gap-6 px-4'}>
              <div className={'col-span-4 sm:col-span-3 '}>
                <div
                  className={
                    'bg-white shadow rounded-lg p-6 flex flex-col items-center'
                  }
                >
                  <img
                    src={infoUser?.avatar}
                    height={200}
                    width={200}
                    alt={''}
                    className={'w-3/4 h-auto mx-auto'}
                  />
                  <h1
                    className={'text-gray-900 font-bold text-xl leading-8 my-1'}
                  >
                    {infoUser?.name}
                  </h1>
                  <span
                    className={'text-gray-600 font-lg text-semibold leading-6'}
                  >
                    {infoUser?.description}
                  </span>

                  <ul
                    className={
                      'bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm'
                    }
                  >
                    <li className={'flex items-center gap-3 py-3'}>
                      <span>Trạng thái</span>
                      <span className={'ml-auto'}>
                        <span
                          className={
                            'bg-green-500 py-1 px-2 rounded text-white text-sm'
                          }
                        >
                          Đang sẵn sàng
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={'col-span-4 sm:col-span-9'}>{children}</div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Profile;
