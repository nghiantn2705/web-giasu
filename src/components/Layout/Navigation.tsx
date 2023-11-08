'use client';
import React from 'react';
import { BiSolidRightArrow } from 'react-icons/bi';
import Link from 'next/link';

const Navigation = () => {
  return (
    <div className={'relative pb-4 gap-3 pr-2 flex flex-col  shadow-x-md'}>
      <div
        className={
          'rounded-t-md fixed w-[235px] max-h-screen overflow-auto flex flex-col gap-4 scroll'
        }
      >
        <div>
          <div
            className={
              'text-xl text-center py-2 bg-blue-tw rounded-t-md text-white '
            }
          >
            <p>Môn Học</p>
          </div>
          <ul className={'flex flex-col gap-2'}>
            <li className={'bg-gray-200 items-center flex gap-2 px-2'}>
              <BiSolidRightArrow />
              <Link className={'hover:text-amber-700 py-2'} href={'/'}>
                Gia Sư Lớp 1
              </Link>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 p-2'}>
              <BiSolidRightArrow />
              <span>Gia Sư Lớp 2</span>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 p-2'}>
              <BiSolidRightArrow />
              <span>Gia Sư Lớp 3</span>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 p-2'}>
              <BiSolidRightArrow />
              <span>Gia Sư Lớp 4</span>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 p-2'}>
              <BiSolidRightArrow />
              <span>Gia Sư Lớp 5</span>
            </li>
          </ul>
        </div>
        <div>
          <div
            className={
              'text-xl text-center py-2 bg-blue-tw rounded-t-md text-white '
            }
          >
            <p>Môn Học</p>
          </div>
          <ul className={'flex flex-col gap-2'}>
            <li className={'bg-gray-200 items-center flex gap-2 px-2'}>
              <BiSolidRightArrow />
              <Link className={'hover:text-amber-700 py-2'} href={'/'}>
                Gia Sư Lớp 1
              </Link>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 p-2'}>
              <BiSolidRightArrow />
              <span>Gia Sư Lớp 2</span>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 p-2'}>
              <BiSolidRightArrow />
              <span>Gia Sư Lớp 3</span>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 p-2'}>
              <BiSolidRightArrow />
              <span>Gia Sư Lớp 4</span>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 p-2'}>
              <BiSolidRightArrow />
              <span>Gia Sư Lớp 5</span>
            </li>
          </ul>
        </div>
        <div>
          <div
            className={
              'text-xl text-center py-2 bg-blue-tw rounded-t-md text-white '
            }
          >
            <p>Môn Học</p>
          </div>
          <ul className={'flex flex-col gap-2'}>
            <li className={'bg-gray-200 items-center flex gap-2 px-2'}>
              <BiSolidRightArrow />
              <Link className={'hover:text-amber-700 py-2'} href={'/'}>
                Gia Sư Lớp 1
              </Link>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 p-2'}>
              <BiSolidRightArrow />
              <span>Gia Sư Lớp 2</span>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 p-2'}>
              <BiSolidRightArrow />
              <span>Gia Sư Lớp 3</span>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 p-2'}>
              <BiSolidRightArrow />
              <span>Gia Sư Lớp 4</span>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 p-2'}>
              <BiSolidRightArrow />
              <span>Gia Sư Lớp 5</span>
            </li>
          </ul>
        </div>
        <div>
          <div
            className={
              'text-xl text-center py-2 bg-blue-tw rounded-t-md text-white '
            }
          >
            <p>Môn Học</p>
          </div>
          <ul className={'flex flex-col gap-2'}>
            <li className={'bg-gray-200 items-center flex gap-2 px-2'}>
              <BiSolidRightArrow />
              <Link className={'hover:text-amber-700 py-2'} href={'/'}>
                Gia Sư Lớp 1
              </Link>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 p-2'}>
              <BiSolidRightArrow />
              <span>Gia Sư Lớp 2</span>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 p-2'}>
              <BiSolidRightArrow />
              <span>Gia Sư Lớp 3</span>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 p-2'}>
              <BiSolidRightArrow />
              <span>Gia Sư Lớp 4</span>
            </li>
            <li className={'bg-gray-200 items-center flex gap-2 p-2'}>
              <BiSolidRightArrow />
              <span>Gia Sư Lớp 5</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;