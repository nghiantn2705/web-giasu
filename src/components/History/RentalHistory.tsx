'use client';

import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
import { IUserInfo } from '@/types/IUserInfo';
import { getJob } from '@/services/job';
import FormConfirmProcedure from '../ModailProcedure/FormConfirmProcedure';

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
  teacherAvatar: string;
  userAvatar: string;
  status: number;
  description: string;
  userName: string;
  teacherName: string;
}
export default function RentalHistory({ infoUser }: IProps) {
  const [job, setJob] = useState<IJob[]>();
  useEffect(() => {
    (async () => {
      const res = await getJob({ id: infoUser?.id });
      setJob(res);
    })();
  }, [setJob, infoUser?.id]);
  console.log(job);
  const sortedJobs = job?.sort((a, b) => b.id - a.id);
  return (
    <div
      className={
        'bg-white shadow rounded-lg p-6 relative w-full overflow-x-auto px-4 border-l-2 h-full'
      }
    >
      <h3
        className={
          'text-lg font-bold uppercase leading-8 text-gray-700 border-b pt-5 pb-3 text-center border-b-gray-300'
        }
      >
        {' '}
        Lịch sử thuê
      </h3>
      <table className={'w-full text-sm text-left text-gray-500 0'}>
        <thead
          className={'text-xs text-gray-700 uppercase bg-gray-50  border-b'}
        >
          <tr>
            <th className={'px-6 py-4'}>Tên</th>
            <th className={'px-6 py-4'}>Môn</th>
            <th className={'px-6 py-4'}>Lớp</th>
            <th className={'px-6 py-4'}>Trạng thái</th>
            {infoUser?.role == 3 ? (
              <th className={'px-6 py-4'}>Action</th>
            ) : (
              <th className={'px-6 py-4'}>Mô tả</th>
            )}
          </tr>
        </thead>
        <tbody>
          {sortedJobs?.map((items: IJob) => {
            return (
              <tr
                className={'bg-white border-b hover:bg-gray-50 '}
                key={items?.id}
              >
                <th
                  scope="row"
                  className={'px-6 py-4 gap-4 text-gray-900 whitespace-nowrap '}
                >
                  <picture>
                    <img
                      src={`${
                        infoUser?.role == 3
                          ? items?.teacherAvatar
                          : items?.userAvatar
                      }`}
                      width={40}
                      height={40}
                      alt={''}
                      className={'rounded-full'}
                    />
                  </picture>
                  <div className={'text-base font-semibold'}>
                    {infoUser.role == 3
                      ? `${items?.userName}`
                      : `${items?.teacherName}`}
                  </div>
                </th>
                <td className={'px-6 py-4'}>
                  <div className={'flex flex-col gap-2'}>
                    {items?.subject?.map((items: string, index: number) => {
                      return <span key={index}>{items}</span>;
                    })}
                  </div>
                </td>
                <td className={'px-6 py-4'}>
                  <div className={'flex flex-col gap-2'}>
                    {items?.class?.map((items: string, index: number) => {
                      return <span key={index}>{items}</span>;
                    })}
                  </div>
                </td>
                <td className={'px-6 py-4'}>
                  {items?.status == 0 ? (
                    <div
                      className={
                        'flex items-center before:h-2.5 before:w-2.5 before:rounded-full before:bg-orange-500 before:mr-2'
                      }
                    >
                      Chờ xác nhận
                    </div>
                  ) : items?.status == 1 ? (
                    <div
                      className={
                        'flex items-center before:h-2.5 before:w-2.5 before:rounded-full before:bg-green-500 before:mr-2'
                      }
                    >
                      Đồng ý
                    </div>
                  ) : (
                    <div
                      className={
                        'flex items-center before:h-2.5 before:w-2.5 before:rounded-full before:bg-red-600 before:mr-2'
                      }
                    >
                      Từ chối
                    </div>
                  )}
                </td>
                <td className="px-6 py-4">
                  {infoUser?.role == 3 ? (
                    items?.status !== 0 ? (
                      'Đã xác nhận'
                    ) : (
                      // <FormConfirmProcedure/>
                      <FormConfirmProcedure user={items} />
                    )
                  ) : (
                    <span>{items?.description}</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
