import React from 'react';
import Link from 'next/link';
import { ISubject } from '@/types/ISubject';
import { IClass } from '@/types/IClass';
import districtsData from '../../district.json';
interface INavigation {
  classes: IClass[];
  subject: ISubject[];
}
const districtsInHanoi = districtsData;
export default function Navigation({ classes, subject }: INavigation) {
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
                  <svg
                    className={'w-4 h-4'}
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path d="m10 8-7 6V2l7 6z" />
                  </svg>
                  <Link
                    className={'hover:text-amber-700 py-2'}
                    href={`/timkiemgiasu?subject=${items.id}`}
                  >
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
            <p>Lớp</p>
          </div>
          <ul className={'flex flex-col gap-2'}>
            {classes?.map((items: IClass, index: number) => {
              return (
                <li
                  key={index}
                  className={'bg-gray-200 items-center flex gap-2 px-2'}
                >
                  <svg
                    className={'w-4 h-4'}
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path d="m10 8-7 6V2l7 6z" />
                  </svg>
                  <Link
                    className={'hover:text-amber-700 py-2'}
                    href={`/timkiemgiasu?class=${items.id}`}
                  >
                    Gia Sư {items?.class}
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
            <p>Khu vực</p>
          </div>
          <ul className={'flex flex-col gap-2'}>
            {districtsInHanoi?.map((items: ISubject, index: number) => {
              return (
                <li
                  key={index}
                  className={'bg-gray-200 items-center flex gap-2 px-2'}
                >
                  <svg
                    className={'w-4 h-4'}
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path d="m10 8-7 6V2l7 6z" />
                  </svg>
                  <Link
                    className={'hover:text-amber-700 py-2'}
                    href={`/timkiemgiasu?DistrictID=${items.name}`}
                  >
                    {items?.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
