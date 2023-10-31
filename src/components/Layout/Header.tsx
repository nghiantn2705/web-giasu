'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FiHome, FiPhone, FiSearch, FiUsers, FiMenu } from 'react-icons/fi';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { deleteCookie } from 'cookies-next';

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
    link: '/contact',
    icon: <FiPhone />,
  },
];
const Header = (props: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = usePathname();
  const rsrouter = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Signout = () => {
    deleteCookie('access_token');
    deleteCookie('refresh_token');
    rsrouter.push('/');
    window.location.reload();
  };
  return (
    <header
      className={
        'fixed top-0 left-0 right-0  border-b shadow bg-white p-2 w-full z-10'
      }
    >
      <div className={'container grid grid-cols-12 items-center'}>
        <Link
          href={'/'}
          className={
            'flex gap-3 h-auto col-span-8 md:col-span-4 lg:col-span-3  xl:col-span-2 '
          }
        >
          <Image
            src={'/logo.png'}
            alt={''}
            width={50}
            height={100}
            className={'rounded-full h-auto w-auto'}
          />
          <div className={'flex flex-col'}>
            <span className={'text-xl'}>GS7</span>
            <span className={'text-sm'}>Uy tín và chất lượng</span>
          </div>
        </Link>

        <div
          className={`gap-2 col-start-12 lg:flex lg:col-span-8 lg:col-start-5`}
        >
          <button className={' lg:hidden'} onClick={toggleMenu}>
            <FiMenu className={'text-2xl'} />
          </button>
          <div
            className={`fixed left-0 top-[67px] w-full bg-white flex flex-col lg:static lg:flex-row lg:gap-2  ${
              isMenuOpen ? 'block' : 'hidden lg:block'
            } `}
          >
            <ul
              className={
                'flex flex-col shadow-md pb-2 lg:py-0 lg:shadow-none lg:flex-row lg:gap-2'
              }
            >
              {navLink.map(({ link, name, icon }) => (
                <Link
                  href={link}
                  key={name}
                  className={`flex justify-center items-center border-b-gray-300 px-4 py-2 gap-3 lg:rounded-lg  lg:border ${
                    router === link ? 'bg-red-400 text-white' : ''
                  }`}
                >
                  {icon}
                  <span>{name}</span>
                </Link>
              ))}
            </ul>
          </div>

          {props?.userInfo ? (
            <div className={'col-start-11 col-span-2 relative w-fit group'}>
              <picture>
                <img
                  src={`/abcxyz`}
                  width={45}
                  height={45}
                  className={
                    'rounded-full shadow drop-shadow-2xl border border-black hover:bg-gray-200 cursor-pointer'
                  }
                  alt={''}
                />
              </picture>
              <div
                className={
                  'absolute top-[55px] -right-2 p-3 border shadow-md w-[250px] bg-white rounded-b-lg invisible transition-all group-hover:visible'
                }
              >
                <Link
                  href={`/profile`}
                  className={
                    'flex gap-3 items-center hover:bg-gray-200 rounded-lg cursor-pointer px-3 py-2'
                  }
                >
                  <picture>
                    <img
                      src={`${props?.userInfo?.avatar}`}
                      width={45}
                      height={45}
                      className={
                        'rounded-full shadow drop-shadow-2xl border border-black '
                      }
                      alt={''}
                    />
                  </picture>
                  <span className={'text-lg font-bold '}>
                    {props?.userInfo?.name}
                  </span>
                </Link>

                <hr className={'mb-2 mt-1 px-1'} />
                <div className={'flex flex-col py-2'}>
                  <a
                    href={'/password'}
                    className={
                      'hover:bg-gray-200 rounded-lg cursor-pointer px-3 py-2'
                    }
                  >
                    Đổi Mật Khẩu
                  </a>
                  <Link
                    href={`/profile`}
                    className={
                      'hover:bg-gray-200 rounded-lg cursor-pointer px-3 py-2'
                    }
                  >
                    Chỉnh sửa thông tin
                  </Link>
                  <a
                    href={`/profile/history`}
                    className={
                      'hover:bg-gray-200 rounded-lg cursor-pointer px-3 py-2'
                    }
                  >
                    Lịch sử thuê
                  </a>
                  <button
                    onClick={Signout}
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
    </header>
  );
};

export default Header;
