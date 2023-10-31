'use client';

import React, { useEffect, useState } from 'react';
import { IDisctrict } from '@/types/IDistrict';
import { getDistrict, getSubject } from '../../../action/get';
import { useRouter } from 'next/navigation';

const SelectFilter = () => {
  const [districts, setDistricts] = useState<IDisctrict[]>();
  const [subject, setSubject] = useState<IDisctrict[]>();
  const [queryDistrict, setQueryDistrict] = useState<string>('');
  const [querySubject, setQuerySubject] = useState<string>('');
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const resDistricts = await getDistrict();
      const resSubject = await getSubject();
      setDistricts(resDistricts);
      setSubject(resSubject);
    })();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (queryDistrict == '') {
      router.replace(`/giasu?subject=${querySubject}`, {
        scroll: false,
      });
    }
    if (querySubject == '') {
      router.replace(`/giasu?DistrictID=${queryDistrict}`, {
        scroll: false,
      });
    }
    if (querySubject && queryDistrict) {
      router.replace(
        `/giasu?DistrictID=${queryDistrict}&subject=${querySubject}`,
        {
          scroll: false,
        },
      );
    }
    if (querySubject == '' && queryDistrict == '') {
      router.replace(`/giasu`, {
        scroll: false,
      });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={'flex justify-between'}>
        <div className={'grid grid-cols-2 gap-2 basis-9/12'}>
          <select
            className={'py-2 px-4 border rounded-lg'}
            name={'DistrictID'}
            defaultValue={''}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              setQueryDistrict(event.target.value);
            }}
          >
            <option value={''}>Khu vực</option>
            {districts?.map((items: IDisctrict) => {
              return (
                <option key={items?.id} value={items?.id}>
                  {items?.name}
                </option>
              );
            })}
          </select>
          <select
            className={'py-2 px-4 border rounded-lg'}
            name={'subject'}
            defaultValue={''}
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
        <button type={'submit'} className={'py-2 px-4 border rounded-md '}>
          Tìm kiếm
        </button>
      </form>
    </>
  );
};

export default SelectFilter;
