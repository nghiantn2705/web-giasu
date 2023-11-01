'use client';
import React from 'react';
import { ITeachers } from '@/types/ITeachers';
import { BsFillHeartFill } from 'react-icons/bs';
import Link from 'next/link';

interface IProps {
  teachers: ITeachers[];
}
const Teacher = ({ teachers }: IProps) => {
  console.log(teachers);
  return (
    <div className={'relative py-5'}>
      <div
        className={
          ' before:absolute before:border-t-blue-tw before:border-t-2 before:top-9 before:w-[96%] before:z-0'
        }
      >
        <span className={'text-2xl bg-white px-3 relative z-10 uppercase'}>
          Tất cả
        </span>
      </div>
      {teachers ? (
        <div className={'grid grid-cols-5 gap-x-4 gap-y-8 mt-8'}>
          {teachers?.map((items: ITeachers, index: number) => {
            return (
              <div
                key={index}
                className={
                  'rounded-xl bg-white border border-blue-tw  shadow hover:shadow-md overflow-hidden ease-in-out duration-500'
                }
              >
                <div className={'relative'}>
                  <a href={`/detail/${items?.id}`}>
                    <picture>
                      <img
                        src={`${items?.avatar}`}
                        width={280}
                        height={200}
                        alt=""
                        className={'w-full h-auto'}
                      />
                    </picture>
                  </a>
                  <div
                    className={
                      'absolute top-4 end-4  p-2 rounded-full  bg-white'
                    }
                  >
                    <a
                      href={'/'}
                      className={
                        'bg-white text-black  focus:text-red-600 hover:text-red-600 '
                      }
                    >
                      <BsFillHeartFill />
                    </a>
                  </div>
                </div>

                <div className={'py-3'}>
                  <div className={'pb-3 px-3'}>
                    <Link
                      href={`/detail/${items?.id}`}
                      className={
                        'text-xl text-blue-tw font-bold hover:text-blue-tw2 ease-in-out duration-500'
                      }
                    >
                      {items?.name}
                    </Link>
                  </div>

                  <ul
                    className={
                      'py-3 px-3 border-y border-slate-100 grid grid-cols-3 gap-1'
                    }
                  >
                    <li
                      className={
                        'border text-center rounded-md bg-blue-tw text-white'
                      }
                    >
                      Toán
                    </li>
                    <li
                      className={
                        'border text-center rounded-md bg-blue-tw text-white'
                      }
                    >
                      Lý
                    </li>
                    <li
                      className={
                        'border text-center rounded-md bg-blue-tw text-white'
                      }
                    >
                      Hóa
                    </li>
                    <li
                      className={
                        'border text-center rounded-md bg-blue-tw text-white'
                      }
                    >
                      Anh
                    </li>
                    <li
                      className={
                        'border text-center rounded-md bg-blue-tw text-white'
                      }
                    >
                      Văn
                    </li>
                  </ul>

                  <ul className="pt-3 px-3 flex justify-between items-center list-none">
                    <li>
                      <span className="text-slate-400">Khu vực</span>
                      <p className="text-lg font-medium">
                        {items?.district?.name}
                      </p>
                    </li>

                    <li>
                      <span className="text-slate-400">Rating</span>
                      <ul className="text-lg font-medium text-amber-400 list-none">
                        <li className="inline">
                          <i className="mdi mdi-star"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star"></i>
                        </li>
                        <li className="inline text-black dark:text-white">
                          5.0(30)
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Teacher;
