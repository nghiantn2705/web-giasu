'use client';
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';

import { FiSearch, FiUsers, FiHome, FiPhone } from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
const Header = () => {
  const router = usePathname();
  return (
    <div
      className={
        'fixed top-0 left-0 right-0  border-b shadow bg-white p-2 w-full z-50'
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
        <ul className={'flex gap-2 col-span-8 col-start-5'}>
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
      </div>
    </div>
  );
};

export default Header;
