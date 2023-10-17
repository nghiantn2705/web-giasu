import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { ITeachers } from '@/types/Teachers';
import { getTeacher } from '../../../action/teacher';

const Teacher = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await getTeacher()
        .then((response) => {
          if (response?.data) {
            setTeachers(response?.data);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    };

    fetchData();
  }, [setTeachers]);
  console.log(teachers);
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
              <ul className={'grid grid-cols-4 gap-1'}>
                <li className={'border text-center rounded-md'}>Toán</li>
                <li className={'border text-center rounded-md'}>Văn</li>
                <li className={'border text-center rounded-md'}>Anh</li>
              </ul>
              <span
                className={
                  'text-sm text-gray-400 border rounded-md min-w-fit px-2 self-end'
                }
              >
                {items?.address}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Teacher;
