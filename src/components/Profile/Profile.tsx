'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import MyHistory from './RentalHistory';
import Link from 'next/link';
import { IUserInfo } from '@/types/IUserInfo';

interface IProps {
  infoUser: IUserInfo;
  children: React.ReactNode;
}
const Profile = ({ infoUser, children }: IProps) => {
  useEffect(() => {}, []);
  return (
    <>
      {infoUser ? (
        <div className={'container m-auto my-5 p-5'}>
          <div className={'md:flex no-wrap shadow-lg'}>
            <div className={'w-full md:w-3/12 md:mx-2 '}>
              <div className={'p-3 border-t-4 border-red-400 '}>
                <div className={''}>
                  <Image
                    src={infoUser?.avatar}
                    alt={''}
                    width={290}
                    height={290}
                    className={'w-3/4 h-auto mx-auto'}
                    priority={true}
                  />
                </div>
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
                  <li className={'flex items-center py-3'}>
                    <span>Status</span>
                    <span className={'ml-auto'}>
                      <span
                        className={
                          'bg-green-500 py-1 px-2 rounded text-white text-sm'
                        }
                      >
                        Active
                      </span>
                    </span>
                  </li>
                  <li className={'flex items-center py-3'}>
                    <span>Member since</span>
                    <span className={'ml-auto'}>Nov 07, 2016</span>
                  </li>
                </ul>
                <div>
                  <Link
                    href={'/profile/history'}
                    className={
                      'block text-center p-2 mt-2 rounded-md bg-red-400 text-white hover:bg-red-500'
                    }
                  >
                    Lịch sử thuê
                  </Link>
                </div>
              </div>
            </div>
            {children}
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Profile;
