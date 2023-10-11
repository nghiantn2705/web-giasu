'use client';
import React from 'react';
import Image from 'next/image';
import { GrHome } from 'react-icons/gr';
import { FiSearch, FiUsers } from 'react-icons/fi';
import { BsTelephone } from 'react-icons/bs';
import Link from 'next/link';

const Header = () => {
  return (
    <div
      className={
        'fixed top-0 flex justify-between items-center border-b p-4 w-full bg-white z-50'
      }
    >
      <div className={'flex gap-5 h-12'}>
        <Image src={'/favicon.jpg'} alt={''} width={50} height={40} />
        <div className={'relative border rounded-full '}>
          <svg
            className={'absolute top-1/2 right-4 -translate-y-1/2'}
            aria-hidden={'true'}
            height="16"
            width="16"
            viewBox={'0 0 1000 1000'}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill={'currentColor'}
              d="M800.2 703.7c-7.300000000000068-7.300000000000068-8.300000000000068-19.90000000000009-2.7000000000000455-28.600000000000023 44-67.70000000000005 69.79999999999995-148.30000000000007 69.79999999999995-234.90000000000003 0-239.2-194.5999999999999-433.7-433.59999999999997-433.7-239.2 0-433.7 194.5-433.7 433.7 0 239.09999999999997 194.5 433.59999999999997 433.7 433.59999999999997 93.09999999999997 0 179.3-29.899999999999977 250.09999999999997-80.09999999999991 8.300000000000068-6 20.800000000000068-5.2000000000000455 28.100000000000023 2l155 155c1 1 2.1000000000000227 2 3.2000000000000455 2.7999999999999545 1.7999999999999545 1.5 9.299999999999955 8.5 16.5 15.799999999999955l18.399999999999977 18.300000000000068c7.2999999999999545 7.199999999999932 19.100000000000023 7.199999999999932 26.299999999999955 0l63.200000000000045-63.200000000000045c7.2999999999999545-7.2999999999999545 7.2999999999999545-19.100000000000023 0.10000000000002274-26.399999999999977l-194.39999999999998-194.29999999999995z m-104.20000000000005-61.5c-14.299999999999955 18.59999999999991-30.399999999999977 35.59999999999991-48.200000000000045 50.69999999999993-57.799999999999955 49.10000000000002-132.5 78.89999999999998-214.09999999999997 78.89999999999998-182.89999999999998 0-331.7-148.79999999999995-331.7-331.59999999999997s148.8-331.7 331.7-331.7c182.8 0 331.59999999999997 148.8 331.59999999999997 331.7 0 76.00000000000006-26.09999999999991 146.00000000000006-69.29999999999995 202.00000000000006z"
            />
          </svg>
          <input
            className={
              'w-50 h-10 pl-4 pr-8 text-md border border-white bg-transparent rounded-md outline outline-0 '
            }
            type={'search'}
            placeholder={'Tìm kiếm '}
          />
        </div>
      </div>
      <ul className={'flex gap-2'}>
        <li className={'p-2 rounded-full bg-gray-200 hover:bg-amber-500'}>
          <Link href={'/'} className={'flex gap-2 items-center'}>
            <GrHome className={'text-xl hover:border-sky-500'} />
            <span>Trang chủ</span>
          </Link>
        </li>
        <li className={'p-2 rounded-full bg-gray-200 hover:bg-amber-500 ju'}>
          <Link href={'/'} className={'flex gap-2 items-center'}>
            <FiUsers className={'text-xl hover:border-sky-500'} />
            <span>Gia Sư </span>
          </Link>
        </li>
        <li className={'p-2  rounded-full bg-gray-200 hover:bg-amber-500'}>
          <Link href={'/'} className={'flex gap-2 items-center'}>
            <FiSearch className={'text-xl hover:border-sky-500'} />
            <span>Tìm gia sư </span>
          </Link>
        </li>
        <li className={'p-2 rounded-full bg-gray-200 hover:bg-amber-500'}>
          <Link href={'/'} className={'flex gap-2 items-center'}>
            <BsTelephone className={'text-xl hover:border-sky-500'} />
            <span>Liên Hệ </span>
          </Link>
        </li>
      </ul>
      <div className={'flex gap-2 justify-center items-center'}>
        <ul className={'flex gap-2'}>
          <li className={'p-3 rounded-full bg-gray-200'}>
            <Link href={'/'}>
              <GrHome className={'text-xl hover:border-sky-500'} />
            </Link>
          </li>
          <li className={'p-2 rounded-full bg-gray-200'}>
            <Link href={'/'}>
              <GrHome className={'text-xl hover:border-sky-500'} />
            </Link>
          </li>
        </ul>
        <button className={'border px-2 py-2 rounded-full'}>Đăng nhập</button>
      </div>
    </div>
  );
};

export default Header;
