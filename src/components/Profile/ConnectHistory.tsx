/* eslint-disable jsx-a11y/click-events-have-key-events */
'use client';

import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
import { IUserInfo } from '@/types/IUserInfo';
import { getConnect } from '@/services/connect';
import FormAcceptConnect from './FormAcceptConnect';
import FormAcceptConnectUser from './FormAcceptConnectUser';

interface IProps {
  infoUser: IUserInfo;
}
interface IConnect {
  id: number;
  idJob: number;
  idUser: string;
  idTeacher: string;
  noteUser: string;
  noteTeacher: string;
  confirmUser: number;
  confirmTeacher: number;
  status: number;
}
export default function ConnectHistory({ infoUser }: IProps) {
  const [job, setConnect] = useState<IConnect[]>();

  console.log(job);
  useEffect(() => {
    (async () => {
      const res = await getConnect({ id: infoUser?.id });
      setConnect(res);
    })();
  }, [setConnect, infoUser?.id]);
  console.log(job);
  return (
    <div
      className={
        'relative w-full overflow-x-auto px-4 border-l-2 border-4 border-indigo-200 border-b-indigo-500'
      }
    >
      <div>
        <h3
          className={
            'text-lg font-bold uppercase leading-8 text-gray-700 border-b pt-5 pb-3 text-center border-b-gray-300'
          }
        >
          {' '}
          Lịch sử xác nhận dạy
        </h3>
        <table className={'w-full text-sm text-left text-gray-500 0'}>
          <thead
            className={'text-xs text-gray-700 uppercase bg-gray-50  border-b'}
          >
            <tr>
              <th className={'px-6 py-4'}>Tên</th>
              <th className={'px-6 py-4'}>Trạng thái gia sư</th>
              <th className={'px-6 py-4'}>Trạng thái người dùng</th>
              {infoUser?.role == 'teacher' ? (
                <th className={'px-6 py-4'}>Action</th>
              ) : (
                <th className={'px-6 py-4'}>Lý do</th>
              )}
              {infoUser?.role == 'user' ? (
                <th className={'px-6 py-4'}>Action</th>
              ) : (
                <th className={'px-6 py-4'}>Lý do</th>
              )}
              <th className={'px-6 py-4'}>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {job?.map((items: IConnect) => {
              return (
                <tr
                  className={'bg-white border-b hover:bg-gray-50 '}
                  key={items?.id}
                >
                  <th
                    scope="row"
                    className={
                      'px-6 py-4 gap-4 text-gray-900 whitespace-nowrap '
                    }
                  >
                    <div className={'text-base font-semibold'}>
                      {infoUser.role == 'teacher'
                        ? `${items?.idUser}`
                        : `${items?.idTeacher}`}
                    </div>
                  </th>

                  <td className={'px-10 py-4'}>
                    {items?.confirmTeacher == 0 ? (
                      <div
                        className={
                          'flex items-center before:h-2.5 before:w-2.5 before:rounded-full before:bg-orange-500 before:mr-2'
                        }
                      >
                        Chờ xác nhận
                      </div>
                    ) : items?.confirmTeacher == 1 ? (
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
                  <td className={'px-10 py-4'}>
                    {items?.confirmUser == 0 ? (
                      <div
                        className={
                          'flex items-center before:h-2.5 before:w-2.5 before:rounded-full before:bg-orange-500 before:mr-2'
                        }
                      >
                        Chờ xác nhận
                      </div>
                    ) : items?.confirmUser == 1 ? (
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
                      items?.confirmTeacher !== 0 ? (
                        'Đã xác nhận'
                      ) : (
                        <FormAcceptConnect user={items} />
                      )
                    ) : (
                      <span>{items?.noteTeacher}</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {infoUser?.role == 'user' ? (
                      items?.confirmUser !== 0 ? (
                        'Đã xác nhận'
                      ) : (
                        <FormAcceptConnectUser user={items} />
                      )
                    ) : (
                      <span>{items?.noteUser}</span>
                    )}
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
                        Hoàn thành
                      </div>
                    ) : (
                      <div
                        className={
                          'flex items-center before:h-2.5 before:w-2.5 before:rounded-full before:bg-red-600 before:mr-2'
                        }
                      >
                        Thất bại
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
