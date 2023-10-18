'use client';

import Banner from '@/components/Banner';
import { Navigation } from '@/components';
import React, { ReactNode } from 'react';
import Fillter from '@/components/Fillters';
import Link from 'next/link';
import SigninUser from '@/components/Auth/Users/Signin';

interface IHome {
  children: ReactNode;
}
export default function Home({ children }: IHome) {
  return (
    <div className={'container lg:border-x lg:shadow-x-md px-0 '}>
      <main
        className={'lg:grid lg:grid-cols-12 xl:grid-cols-10 lg:gap-4 lg:px-4 '}
      >
        <div className={'hidden lg:block lg:col-span-3 xl:col-span-2'}>
          <Navigation />
        </div>
        <div
          className={
            ' xl:col-start-3 lg:col-span-9 xl:col-span-8 pt-4 flex flex-col gap-4'
          }
        >
          <Banner />
          <div className={'grid grid-cols-2 gap-5'}>
            <div
              className={
                "bg-[url('/bg-ph.png')] rounded-md bg-center bg-cover bg-no-repeat"
              }
            >
              <div className={'px-2 flex flex-col gap-10 pb-8 pt-5'}>
                <h3
                  className={
                    'text-center text-white font-bold text-xl uppercase'
                  }
                >
                  Dành cho phụ huynh
                </h3>
                <ul
                  className={
                    'grid grid-cols-2 gap-y-6 px-4 bg-center bg-cover bg-no-repeat'
                  }
                >
                  <li
                    className={
                      'bg-yellow-500 rounded-xl font-bold uppercase content-center text-sm px-2 pt-2 w-fit'
                    }
                  >
                    <Link href={''} className={''}>
                      Giới thiệu hoạt động
                    </Link>
                  </li>
                  <li>
                    <div
                      className={
                        'bg-yellow-500 py-2 px-4 rounded-xl font-bold uppercase text-sm hover:bg-red-400 hover:text-white w-fit'
                      }
                    >
                      <SigninUser />
                    </div>
                  </li>
                  <li>
                    <Link
                      href={''}
                      className={
                        'bg-yellow-500 py-2 px-4 rounded-xl font-bold uppercase text-sm hover:bg-red-400 hover:text-white'
                      }
                    >
                      Học phí tham khảo
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={''}
                      className={
                        'bg-yellow-500 py-2 px-4 rounded-xl font-bold uppercase text-sm hover:bg-red-400 hover:text-white'
                      }
                    >
                      Đăng ký tìm gia sư
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={
                "bg-[url('/bg-gs.png')] rounded-md bg-center bg-cover bg-no-repeat"
              }
            >
              <div className={'px-2 flex flex-col gap-10 pb-8 pt-5'}>
                <h3
                  className={
                    'text-center text-white font-bold text-xl uppercase'
                  }
                >
                  Dành cho gia sư
                </h3>
                <ul
                  className={
                    'grid grid-cols-2 gap-y-6 px-4 bg-center bg-cover bg-no-repeat'
                  }
                >
                  <li>
                    <Link
                      href={''}
                      className={
                        'bg-yellow-500 py-2 px-4 rounded-xl font-bold uppercase text-sm hover:bg-red-400 hover:text-white'
                      }
                    >
                      Những kĩ năng cần biết
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={''}
                      className={
                        'bg-yellow-500 py-2 px-4 rounded-xl font-bold uppercase text-sm hover:bg-red-400 hover:text-white'
                      }
                    >
                      Đăng nhập/ đăng ký
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={''}
                      className={
                        'bg-yellow-500 py-2 px-4 rounded-xl font-bold uppercase text-sm hover:bg-red-400 hover:text-white'
                      }
                    >
                      Đăng ký làm gia sư
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {children}
        </div>
      </main>
    </div>
  );
}
