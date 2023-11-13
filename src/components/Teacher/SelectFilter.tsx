'use client';

import React, { useState } from 'react';
import { IDisctrict } from '@/types/IDistrict';
import { AiOutlineHome } from 'react-icons/ai';
import { BsBook, BsSearch } from 'react-icons/bs';
import { IClass } from '@/types/IClass';
import { useRouter } from 'next/navigation';

const SelectFilter = ({ district, subject, classer }: any) => {
  const [queryDistrict, setQueryDistrict] = useState<string>('');
  const [querySubject, setQuerySubject] = useState<string>('');
  const [queryClass, setQueryClass] = useState<string>('');
  const router = useRouter();

  return (
    <div className={'relative'}>
      <form
        method={'GET'}
        className={' shadow-xl p-5 rounded-b-xl border  bg-white w-full'}
      >
        <div className={'grid grid-cols-3'}>
          <div className={'flex flex-col gap-5'}>
            <span className={'font-bold'}>Khu Vực :</span>
            <div className={'relative border-r'}>
              <AiOutlineHome
                className={'absolute text-2xl top-3 left-3 text-blue-tw'}
              />
              <select
                className={'py-3 pl-10 w-full text-lg bg-gray-100'}
                name={'DistrictID'}
                value={queryDistrict}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                  setQueryDistrict(event.target.value);
                }}
              >
                <option value={''}>Khu vực</option>
                {district?.map((items: IDisctrict) => {
                  return (
                    <option key={items?.id} value={items?.id}>
                      {items?.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className={'flex flex-col gap-5'}>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className={'font-bold '}>Môn học:</label>
            <div className={'relative border-r'}>
              <BsBook
                className={'absolute text-2xl top-3 left-3 text-blue-tw'}
              />
              <select
                className={'py-3 pl-10 w-full text-lg bg-gray-100'}
                name={'subject'}
                value={querySubject}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                  setQuerySubject(event.target.value);
                }}
              >
                <option value={''}>Môn học</option>
                {subject?.map((items: IDisctrict) => {
                  return (
                    <option key={items?.id} value={items?.id}>
                      {items?.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className={'flex flex-col gap-5'}>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className={'font-bold '}>Lớp:</label>
            <div className={'relative border-r'}>
              <BsBook
                className={'absolute text-2xl top-3 left-3 text-blue-tw'}
              />
              <select
                className={'py-3 pl-10 w-full text-lg bg-gray-100'}
                name={'class'}
                value={queryClass}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                  setQueryClass(event.target.value);
                }}
              >
                <option value={''}>Lớp</option>
                {classer?.map((items: IClass) => {
                  return (
                    <option key={items?.id} value={items?.id}>
                      {items?.class}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
        <button
          type={'submit'}
          className={
            'mt-8 py-2 px-4 flex items-center gap-2 border rounded-md bg-blue-tw1 text-white hover:bg-blue-tw'
          }
        >
          {' '}
          <BsSearch />
          Tìm kiếm
        </button>
      </form>
    </div>
  );
};

export default SelectFilter;
