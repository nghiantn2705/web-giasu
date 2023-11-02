'use client';
import React from 'react';
import { BiSolidRightArrow } from 'react-icons/bi';
import Link from 'next/link';

const Navigation = () => {
  return (
    <div className={'relative  w-[260px]  '}>
      <div
        className={
          'fixed w-[260px] flex-none h-[calc(100vh-67px)] overflow-auto border pt-4 px-2'
        }
      >
        <div className={'rounded-t-md font-bold'}>
          <h2>Môn học</h2>
          <ul className={'flex flex-col gap-2 '}>
            <li className={'bg-gray-200 items-center flex gap-2 px-2'}>
              <BiSolidRightArrow />
              <Link className={'hover:text-amber-700 py-2'} href={'/'}>
                Toán
              </Link>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 px-2'}>
              <BiSolidRightArrow />
              <Link className={'hover:text-amber-700 py-2'} href={'/'}>
                Toán
              </Link>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 px-2'}>
              <BiSolidRightArrow />
              <Link className={'hover:text-amber-700 py-2'} href={'/'}>
                Toán
              </Link>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 px-2'}>
              <BiSolidRightArrow />
              <Link className={'hover:text-amber-700 py-2'} href={'/'}>
                Toán
              </Link>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 px-2'}>
              <BiSolidRightArrow />
              <Link className={'hover:text-amber-700 py-2'} href={'/'}>
                Toán
              </Link>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 px-2'}>
              <BiSolidRightArrow />
              <Link className={'hover:text-amber-700 py-2'} href={'/'}>
                Toán
              </Link>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 px-2'}>
              <BiSolidRightArrow />
              <Link className={'hover:text-amber-700 py-2'} href={'/'}>
                Toán
              </Link>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 px-2'}>
              <BiSolidRightArrow />
              <Link className={'hover:text-amber-700 py-2'} href={'/'}>
                Toán
              </Link>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 px-2'}>
              <BiSolidRightArrow />
              <Link className={'hover:text-amber-700 py-2'} href={'/'}>
                Toán
              </Link>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 px-2'}>
              <BiSolidRightArrow />
              <Link className={'hover:text-amber-700 py-2'} href={'/'}>
                Toán
              </Link>
            </li>
          </ul>
        </div>
        <div className={'rounded-t-md font-bold'}>
          <h2>Lớp</h2>
          <ul className={'flex flex-col gap-2 '}>
            <li className={'bg-gray-200 items-center flex gap-2 px-2'}>
              <BiSolidRightArrow />
              <Link className={'hover:text-amber-700 py-2'} href={'/'}>
                Toán
              </Link>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 px-2'}>
              <BiSolidRightArrow />
              <Link className={'hover:text-amber-700 py-2'} href={'/'}>
                Toán
              </Link>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 px-2'}>
              <BiSolidRightArrow />
              <Link className={'hover:text-amber-700 py-2'} href={'/'}>
                Toán
              </Link>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 px-2'}>
              <BiSolidRightArrow />
              <Link className={'hover:text-amber-700 py-2'} href={'/'}>
                Toán
              </Link>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 px-2'}>
              <BiSolidRightArrow />
              <Link className={'hover:text-amber-700 py-2'} href={'/'}>
                Toán
              </Link>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 px-2'}>
              <BiSolidRightArrow />
              <Link className={'hover:text-amber-700 py-2'} href={'/'}>
                Toán
              </Link>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 px-2'}>
              <BiSolidRightArrow />
              <Link className={'hover:text-amber-700 py-2'} href={'/'}>
                Toán
              </Link>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 px-2'}>
              <BiSolidRightArrow />
              <Link className={'hover:text-amber-700 py-2'} href={'/'}>
                Toán
              </Link>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 px-2'}>
              <BiSolidRightArrow />
              <Link className={'hover:text-amber-700 py-2'} href={'/'}>
                Toán
              </Link>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 px-2'}>
              <BiSolidRightArrow />
              <Link className={'hover:text-amber-700 py-2'} href={'/'}>
                Toán
              </Link>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 px-2'}>
              <BiSolidRightArrow />
              <Link className={'hover:text-amber-700 py-2'} href={'/'}>
                Toán
              </Link>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 px-2'}>
              <BiSolidRightArrow />
              <Link className={'hover:text-amber-700 py-2'} href={'/'}>
                Toán
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
