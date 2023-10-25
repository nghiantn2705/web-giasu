'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getJob } from '@/services';
import { IUserInfo } from '@/types/IUserInfo';
import FormAccept from '@/components/Profile/FormAccept';

interface IProps {
  infoUser: IUserInfo;
}
interface IJob {
  id: number;
  idUser: string;
  idTeacher: string;
  idSubject: string;
  userImage: string;
  teacherImage: string;
  status: number;
  description: string;
}
export default function RentalHistory({ infoUser }: IProps) {
  const [job, setJob] = useState<IJob[]>();

  useEffect(() => {
    (async () => {
      const res = await getJob({ id: infoUser?.id });
      setJob(res);
    })();
  }, [setJob, infoUser?.id]);

  return (
    <div className={'relative w-full overflow-x-auto px-4 border-l-2'}>
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
            <th className={'px-6 py-4'}>Trạng thái</th>
            {infoUser?.role == 'teacher' ? (
              <th className={'px-6 py-4'}>Action</th>
            ) : (
              <th className={'px-6 py-4'}>Mô tả</th>
            )}
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
                  className={
                    'flex items-center px-6 py-4 gap-4 text-gray-900 whitespace-nowrap '
                  }
                >
                  <Image
                    src={`${
                      infoUser?.role == 'teacher'
                        ? items?.teacherImage
                        : items?.userImage
                    }`}
                    width={40}
                    height={40}
                    alt={''}
                    className={'rounded-full'}
                  />
                  <div className={'text-base font-semibold'}>
                    {infoUser.role == 'teacher'
                      ? `${items?.idUser}`
                      : `${items?.idTeacher}`}
                  </div>
                </th>
                <td className={'px-6 py-4'}>{items?.idSubject}</td>
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
                  {infoUser?.role == 'teacher' ? (
                    items?.status == 1 ? (
                      'Đã xác nhận'
                    ) : (
                      <FormAccept user={items} />
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
