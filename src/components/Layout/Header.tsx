'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  FiHome,
  FiPhone,
  FiSearch,
  FiUsers,
  FiMenu,
  FiSettings,
} from 'react-icons/fi';
import { BiLogIn, BiHistory, BiMoney } from 'react-icons/bi';
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
    link: '/timkiemgiasu',
    icon: <FiSearch />,
  },
  {
    name: 'Liên hệ',
    link: '/contact',
    icon: <FiPhone />,
  },
];
const Header = (props: any) => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavLinkOpen, setIsNavLinkOpen] = useState(false);
  const router = usePathname();
  const rsrouter = useRouter();

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };
  const toggleNavLink = () => {
    setIsNavLinkOpen(!isNavLinkOpen);
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
        'fixed top-0 left-0 right-0  border-b shadow bg-white p-2 w-full z-50'
      }
    >
      <div className={'container flex justify-between items-center'}>
        <Link href={'/'} className={'flex gap-3 h-auto'}>
          <Image
            src={'/logo.png'}
            alt={''}
            width={50}
            height={100}
            className={'rounded-full h-auto w-auto'}
          />
          <div className={'flex flex-col text-blue-tw2 font-bold'}>
            <span className={'text-xl'}>GS7</span>
            <span className={'text-sm'}>Uy tín và chất lượng</span>
          </div>
        </Link>

        {/* <button className={' lg:hidden'} onClick={toggleMenu}>
          <FiMenu className={'text-2xl'} />
        </button> */}
        <button className={' lg:hidden'} onClick={toggleNavLink}>
          <FiMenu className={'text-2xl'} />
        </button>
        <ul className="hidden lg:flex justify-center items-center gap-5">
          {navLink.map(({ link, name, icon }) => (
            <Link
              href={link}
              key={name}
              className={`flex justify-center items-center border-b-gray-300 px-4 py-2 gap-2 lg:rounded-lg  lg:border-2 lg:shadow-md uppercase text-blue-tw2 text-base  ${
                router === link ? 'text-white bg-blue-tw ' : ''
              }`}
            >
              {icon}
              <span>{name}</span>
            </Link>
          ))}
        </ul>
        {isNavLinkOpen && (
          <ul className={`lg:hidden block justify-center items-center gap-5`}>
            {navLink.map(({ link, name, icon }) => (
              <Link
                href={link}
                key={name}
                className={`flex justify-center items-center border-b-gray-300 px-4 py-2 gap-2 lg:rounded-lg  lg:border-2 lg:shadow-md uppercase text-blue-tw2 text-base  ${
                  router === link ? 'text-white bg-blue-tw ' : ''
                }`}
              >
                {icon}
                <span>{name}</span>
              </Link>
            ))}
          </ul>
        )}
        {props?.userInfo ? (
          <div className={'col-start-11 col-span-2 relative w-fit group'}>
            <picture className={''}>
              <img
                src={`${props?.userInfo?.avatar}`}
                width={50}
                height={50}
                className={
                  'rounded-full  border-2 border-gray-500 hover:bg-gray-200 cursor-pointer w-12 h-12'
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
                      'rounded-full  border-2 border-gray-500 hover:bg-gray-200 cursor-pointer w-12 h-12 '
                    }
                    alt={''}
                  />
                </picture>
                <span className={'text-lg font-bold '}>
                  {props?.userInfo?.name}
                </span>
              </Link>

              <hr className={'mt-1 px-1'} />
              <div className={'flex flex-col py-2'}>
                <span
                  className={
                    'flex items-center gap-2 hover:bg-gray-200 rounded-lg cursor-pointer px-3 py-2'
                  }
                >
                  <BiMoney />
                  Số dư :
                </span>
                <a
                  href={`/profile`}
                  className={
                    'flex items-center gap-2 hover:bg-gray-200 rounded-lg cursor-pointer px-3 py-2'
                  }
                >
                  <FiSettings />
                  Chỉnh sửa thông tin
                </a>
                <a
                  href={`/profile/history`}
                  className={
                    'flex items-center gap-2 hover:bg-gray-200 rounded-lg cursor-pointer px-3 py-2'
                  }
                >
                  <BiHistory />
                  Lịch sử thuê
                </a>
                <button
                  onClick={Signout}
                  type={'button'}
                  className={
                    'flex items-center gap-2 hover:bg-gray-200 rounded-lg cursor-pointer px-3 py-2 text-left'
                  }
                >
                  <BiLogIn />
                  Đăng xuất
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className={'relative group'}>
            <div
              className={'border px-4 py-2 rounded-md bg-blue-tw text-white '}
            >
              Đăng nhập
            </div>
            <div
              className={
                'absolute top-[55px] -right-2 p-3 border shadow-md w-[280px] bg-white rounded-b-lg transition-all grid grid-cols-2 gap-3 invisible group-hover:visible'
              }
            >
              <Link
                href={`/auth/user`}
                className={
                  'text-center rounded-lg cursor-pointer px-3 py-2 border bg-blue-tw text-white'
                }
              >
                Phụ Huynh
              </Link>
              <Link
                href={`/auth/teacher`}
                className={
                  'text-center rounded-lg cursor-pointer px-3 py-2 bg-blue-tw text-white'
                }
              >
                Gia sư
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
