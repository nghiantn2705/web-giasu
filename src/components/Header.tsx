'use client';

import React from 'react';
import Image from 'next/image';
import { FiHome, FiPhone, FiSearch, FiUsers } from 'react-icons/fi';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const navLink = [
  {
    name: 'Trang Chủ',
    link: '/',
    icon: <FiHome />,
  },
  {
    name: 'Gia sư',
    link: '/giasu',
    icon: <FiUsers />,
  },
  {
    name: 'Tìm gia sư',
    link: '/timgiasu',
    icon: <FiSearch />,
  },
  {
    name: 'Liên hệ',
    link: '/lienhe',
    icon: <FiPhone />,
  },
];
const Header = (props: any) => {
  const router = usePathname();
  const refreshRouter = useRouter();
  const Signin = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    refreshRouter.replace('/');
  };
  return (
    <div
      className={
        'fixed top-0 left-0 right-0  border-b shadow bg-white p-2 w-full z-10'
      }
    >
      <div className={'container grid grid-cols-12 items-center'}>
        <div className={'flex col-span-2 gap-3 h-auto '}>
          <Image
            src={'/logo.png'}
            alt={''}
            width={50}
            height={100}
            className={'rounded-full'}
          />
          <div className={'flex flex-col'}>
            <span className={'text-xl'}>GS7</span>
            <span className={'text-sm'}>Uy tín và chất lượng</span>
          </div>
        </div>
        <ul className={'flex gap-2 col-span-5 col-start-5'}>
          {navLink.map(({ link, name, icon }) => (
            <Link
              href={link}
              key={name}
              className={`flex items-center rounded-lg gap-3 px-4 py-2 border ${
                router === link ? 'bg-red-400 text-white' : ''
              }`}
            >
              {icon}
              <span>{name}</span>
            </Link>
          ))}
        </ul>

        {props.userInfo ? (
          <div className={'col-start-11 col-span-2 relative w-fit group'}>
            <div>
              <Image
                src={props?.userInfo?.avatar}
                width={45}
                height={45}
                className={
                  'rounded-full shadow drop-shadow-2xl border border-black hover:bg-gray-200 cursor-pointer'
                }
                alt={''}
              />
            </div>
            <div
              className={
                'absolute top-[59px] right-0 p-3 border shadow-md w-[250px] bg-white rounded-b-lg invisible transition-all group-hover:visible'
              }
            >
              <div
                className={
                  'flex gap-3 items-center hover:bg-gray-200 rounded-lg cursor-pointer px-3 py-2'
                }
              >
                <Image
                  src={`${props?.userInfo?.avatar}`}
                  width={45}
                  height={45}
                  className={
                    'rounded-full shadow drop-shadow-2xl border border-black '
                  }
                  alt={''}
                />
                <span className={'text-lg font-bold '}>
                  {props?.userInfo?.name}
                </span>
              </div>
              <hr className={'mb-2 mt-1 px-1'} />
              <div className={'flex flex-col py-2'}>
                <span
                  className={
                    'hover:bg-gray-200 rounded-lg cursor-pointer px-3 py-2'
                  }
                >
                  Đổi Mật Khẩu
                </span>
                <span
                  className={
                    'hover:bg-gray-200 rounded-lg cursor-pointer px-3 py-2'
                  }
                >
                  Chỉnh sửa thông tin
                </span>
                <button
                  onClick={Signin}
                  type={'button'}
                  className={
                    'hover:bg-gray-200 rounded-lg cursor-pointer px-3 py-2 text-left'
                  }
                >
                  Đăng xuất
                </button>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Header;
