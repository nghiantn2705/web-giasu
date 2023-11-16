'use client';

import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
import { IUserInfo } from '@/types/IUserInfo';
// import FormAccept from '@/components/Profile/FormAccept';
import { getJob } from '@/services/job';

interface IProps {
  infoUser: IUserInfo;
}
interface IJob {
  id: number;
  idUser: string;
  idTeacher: string;
  idSubject: string;
  subject: string[];
  class: string[];
  teacherImage: string;
  status: number;
  description: string;
}
export default function PaypalHistory({ infoUser }: IProps) {
  const [job, setJob] = useState<IJob[]>();

  useEffect(() => {
    (async () => {
      const res = await getJob({ id: infoUser?.id });
      setJob(res);
    })();
  }, [setJob, infoUser?.id]);
  console.log(job);
  return (
    <div className={'relative w-full overflow-x-auto px-4 border-l-2'}>
      <h3
        className={
          'text-lg font-bold uppercase leading-8 text-gray-700 border-b pt-5 pb-3 text-center border-b-gray-300'
        }
      >
        {' '}
        Lịch sử nạp tiền
      </h3>
      <table className={'w-full text-sm text-left text-gray-500 0'}>
        <thead
          className={'text-xs text-gray-700 uppercase bg-gray-50  border-b'}
        >
          <tr>
            <th className={'px-6 py-4'}>Tên</th>
            <th className={'px-6 py-4'}>Ngày Nạp</th>
            <th className={'px-6 py-4'}>Giờ Nạp</th>
            <th className={'px-6 py-4'}>Số tiền</th>
          </tr>
        </thead>
        <tbody>
          {job?.map((items: IJob) => {
            return (
              <tr
                className={'bg-white border-b hover:bg-gray-50 '}
                key={items?.id}
              >
                <th
                  scope="row"
                  className={'px-6 py-4 gap-4 text-gray-900 whitespace-nowrap '}
                >
                  {/* <Image
                    src={`${
                      infoUser?.role == 'teacher'
                        ? items?.teacherImage
                        : items?.userImage
                    }`}
                    width={40}
                    height={40}
                    alt={''}
                    className={'rounded-full'}
                  /> */}
                  <div className={'text-base font-semibold'}>
                    {infoUser.role == 'teacher'
                      ? `${items?.idUser}`
                      : `${items?.idTeacher}`}
                  </div>
                </th>
                <td className={'px-6 py-4'}>
                  <div className={'flex flex-col gap-2'}>
                    <p>11/14/2023</p>
                  </div>
                </td>
                <td className={'px-6 py-4'}>
                  <div className={'flex flex-col gap-2'}>
                    <p>7:23:40</p>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <p>500.000</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
