'use client';

import Banner from '@/components/Layout/Banner';
import React, { ReactNode } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components';

interface IHome {
  children: ReactNode;
}
export default function Home({ children }: IHome) {
  return (
    <div
      className={
        'container lg:shadow-x-md lg:grid lg:grid-cols-12 xl:grid-cols-10 lg:gap-4 lg:px-4 '
      }
    >
      <div className={'hidden pt-4 lg:block lg:col-span-3 xl:col-span-2'}>
        <Navigation />
      </div>
      <div
        className={
          ' xl:col-start-3 lg:col-span-9 xl:col-span-8 pt-4 flex flex-col gap-4'
        }
      >
        <Banner />
        <div className={' grid gap-5 md:grid-cols-2 px-2 md:px-4 lg:px-0 my-5'}>
          <div
            className={
              "bg-[url('/bg-ph.png')] rounded-md bg-center bg-cover bg-no-repeat"
            }
          >
            <div
              className={
                'px-2 flex flex-col pb-8 pt-5 gap-3 lg:gap-5 xl:gap-10'
              }
            >
              <h3 className={'text-center text-white text-xl uppercase'}>
                Dành cho phụ huynh
              </h3>
              <ul
                className={
                  'grid  bg-center bg-cover bg-no-repeat pl-5 gap-y-2 xl:pl-0  xl:grid-cols-2 xl:w-[80%] xl:gap-y-4 xl:mx-auto'
                }
              >
                <li
                  className={
                    'bg-blue-tw text-white py-2 px-4 rounded-xl font-bold uppercase text-sm hover:bg-white hover:text-blue-tw2 w-fit'
                  }
                >
                  <Link href={''}>Giới thiệu hoạt động</Link>
                </li>
                <li
                  className={
                    'bg-blue-tw text-white py-2 px-4 rounded-xl font-bold uppercase text-sm hover:bg-white hover:text-blue-tw2 w-fit'
                  }
                >
                  <Link href={'/auth/user'}>Đăng nhập/ đăng ký</Link>
                </li>
                <li
                  className={
                    'bg-blue-tw text-white py-2 px-4 rounded-xl font-bold uppercase text-sm hover:bg-white hover:text-blue-tw2 w-fit'
                  }
                >
                  <Link href={''}>Học phí tham khảo</Link>
                </li>
                <li
                  className={
                    'bg-blue-tw text-white py-2 px-4 rounded-xl font-bold uppercase text-sm hover:bg-white hover:text-blue-tw2 w-fit'
                  }
                >
                  <Link href={''}>Đăng ký tìm gia sư</Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={
              "bg-[url('/bg-gs.png')] rounded-md bg-center bg-cover bg-no-repeat"
            }
          >
            <div
              className={
                'px-2 flex flex-col pb-8 pt-5 gap-3 lg:gap-5 xl:gap-10'
              }
            >
              <h3 className={'text-center text-white text-xl uppercase'}>
                Dành cho gia sư
              </h3>
              <ul
                className={
                  'grid  bg-center bg-cover bg-no-repeat pl-5 gap-y-2 xl:pl-0  xl:grid-cols-2 xl:w-[90%] xl:gap-y-4 xl:mx-auto'
                }
              >
                <li
                  className={
                    'bg-blue-tw text-white py-2 px-4 rounded-xl font-bold uppercase text-sm hover:bg-white hover:text-blue-tw2 w-fit'
                  }
                >
                  <Link href={''}>Những kĩ năng cần biết</Link>
                </li>
                <li
                  className={
                    'bg-blue-tw text-white py-2 px-4 rounded-xl font-bold uppercase text-sm hover:bg-white hover:text-blue-tw2 w-fit'
                  }
                >
                  <Link href={'/auth/teacher'}>Đăng nhập/ đăng ký</Link>
                </li>
                <li
                  className={
                    'bg-blue-tw text-white py-2 px-4 rounded-xl font-bold uppercase text-sm hover:bg-white hover:text-blue-tw2 w-fit'
                  }
                >
                  <Link href={''}>Đăng ký làm gia sư</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <main className={''}>{children}</main>
      </div>
    </div>
  );
}
