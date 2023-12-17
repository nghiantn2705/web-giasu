'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getStart } from '@/services/feedback';
import { ITeacherFilter } from '@/types/ITeacherFilter';
import { FaStar } from 'react-icons/fa';

interface IProps {
  teachers: ITeacherFilter[];
}

const Teacher = ({ teachers }: IProps) => {
  const [starData, setStarData] = useState<{ avg: string }>();
  console.log(teachers);
  useEffect(() => {
    (async () => {
      const resRating = await getStart({ id: teachers?.[0]?.id });
      setStarData(resRating);
    })();
  }, []);

  return (
    <>
      {teachers ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {teachers?.map((items: ITeacherFilter, index: number) => {
            return (
              <div
                key={index}
                className="w-full rounded-xl bg-white border border-b-gray-200 py-3 drop-shadow-lg hover:shadow-md overflow-hidden ease-in-out duration-500"
              >
                <Link href={`/detail/${items?.id}`}>
                  <div className="relative flex justify-center">
                    <img
                      src={`${items?.avatar}`}
                      width={200}
                      height={200}
                      alt=""
                      className="object-cover w-auto h-48"
                    />
                  </div>
                </Link>

                <div className="py-3">
                  <div className="pb-3 px-3">
                    <Link
                      href={`/detail/${items?.id}`}
                      className="text-xl text-blue-tw font-bold hover:text-blue-tw2 ease-in-out duration-500"
                    >
                      {items?.name}
                    </Link>
                  </div>

                  <ul className="py-3 px-3 border-y border-slate-100 grid grid-cols-2 gap-1">
                    {items?.subject?.map((item, index: number) => (
                      <li
                        key={index}
                        className="border text-center rounded-md bg-blue-tw text-white"
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
                      <span className="text-slate-400">Đánh giá</span>
                      <ul className="text-sm font-medium text-amber-400 list-none flex">
                        {[...Array(starData?.avg)].map((star, i) => (
                          <li key={i} className="inline">
                            <FaStar className={''} />
                          </li>
                        ))}
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
