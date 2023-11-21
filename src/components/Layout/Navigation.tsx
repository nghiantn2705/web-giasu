'use client';

import React, { useEffect, useState } from 'react';
import { BiSolidRightArrow } from 'react-icons/bi';
import Link from 'next/link';
import { IDisctrict } from '@/types/IDistrict';
import { ISubject } from '@/types/ISubject';
import { IClass } from '@/types/IClass';
import { useRouter } from 'next/navigation';
import { getClass, getDistrict, getSubject } from '@/services/get';

const Navigation = () => {
  const [districts, setDistricts] = useState<IDisctrict[]>();
  const [subject, setSubject] = useState<ISubject[]>();
  const [classes, setClass] = useState<IClass[]>();
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const resDistricts = await getDistrict();
      const resSubject = await getSubject();
      const resClass = await getClass();
      setDistricts(resDistricts);
      setSubject(resSubject);
      setClass(resClass);
    })();
  }, []);

  return (
    <div className={'relative pb-4 gap-3 pr-2 flex flex-col  shadow-x-md'}>
      <div
        className={
          'rounded-t-md  w-[235px] overflow-auto flex flex-col gap-4 scroll'
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
            {subject?.map((items: ISubject, index: number) => {
              return (
                <li
                  key={index}
                  className={'bg-gray-200 items-center flex gap-2 px-2'}
                >
                  <BiSolidRightArrow />
                  <Link className={'hover:text-amber-700 py-2'} href={'/'}>
                    Gia Sư {items?.name}
                  </Link>
                </li>
              );
            })}
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
