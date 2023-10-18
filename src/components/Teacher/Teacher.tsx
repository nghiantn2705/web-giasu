import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ITeachers } from '@/types/Teachers';

const Teacher = ({ teachers }: any) => {
  return (
    <div className={'grid grid-cols-5 gap-x-4 gap-y-10 py-5'}>
      {teachers?.map((items: ITeachers, index: number) => {
        return (
          <Link href={''} key={index} className={'border rounded-md'}>
            <Image
              src={items?.avatar}
              alt={''}
              width={250}
              height={50}
              className={'h-auto rounded-t-md'}
            />
            <div className={'flex flex-col gap-2 px-2 pt-4 pb-2'}>
              <h3 className={'font-bold text-lg'}>{items?.name}</h3>
              <ul className={'flex gap-1'}>
                <li className={'border px-1 text-center rounded-md'}>
                  {items?.subject}
                </li>
              </ul>
              <span
                className={
                  'text-sm text-gray-400 border rounded-md min-w-fit px-2 self-end'
                }
              >
                {items?.DistrictID}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Teacher;
