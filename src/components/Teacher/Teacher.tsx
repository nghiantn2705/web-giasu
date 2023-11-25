/* eslint-disable no-unused-vars */
'use client';
import React, { useEffect, useState } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { getStart } from '@/services/feedback';
import { useParams } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ITeacherFilter } from '@/types/ITeacherFilter';

interface IProps {
  teachers: ITeacherFilter[];
}

const Teacher = ({ teachers }: IProps) => {
  const [starData, setStarData] = useState<{ avg: string }>();
  const { id: params } = useParams();
  useEffect(() => {
    (async () => {
      const resRating = await getStart({ params });

      setStarData(resRating);
    })();
  }, []);
  console.log(teachers);
  return (
    <>
      {teachers ? (
        <div
          className={
            'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8'
          }
        >
          {teachers?.map((items: ITeacherFilter, index: number) => {
            return (
              <div
                key={index}
                className={
                  'rounded-xl bg-white border border-blue-tw  shadow hover:shadow-md overflow-hidden ease-in-out duration-500 '
                }
              >
                <div className={'relative'}>
                  <a href={`/detail/${items?.id}`}>
                    <picture className={'flex justify-center'}>
                      <img
                        src={`${items?.avatar}`}
                        width={200}
                        height={200}
                        alt=""
                        className={'w-auto h-[200px] object-cover'}
                      />
                    </picture>
                  </a>
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
                      'py-3 px-3 border-y border-slate-100 grid grid-cols-2 gap-1'
                    }
                  >
                    {items?.subject?.map((item, index: number) => (
                      <li
                        key={index}
                        className={
                          'border text-center rounded-md bg-blue-tw text-white'
                        }
                      >
                        {item?.name}
                      </li>
                    ))}
                  </ul>

                  <ul className="pt-3 px-3 flex justify-between gap-8 list-none">
                    <li>
                      <span className="text-slate-400">Khu vực</span>
                      <p className="text-sm font-medium">{items?.district}</p>
                    </li>

                    <li>
                      <span className="text-slate-400">Rating</span>
                      <ul className="text-sm font-medium text-amber-400 list-none">
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
    </>
  );
};

export default Teacher;
