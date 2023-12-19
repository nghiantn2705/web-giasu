/* eslint-disable jsx-a11y/click-events-have-key-events */
'use client';

import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
import { IUserInfo } from '@/types/IUserInfo';
import { getConnect } from '@/services/connect';
import FormCeonnectProcedure from '../ModailProcedure/FormCeonnectProcedure';
import FormCeonnectUserProcedure from '../ModailProcedure/FormCeonnecUsertProcedure';
import { IConnect } from '@/types/IConect';
import FormRefuseConnectProcedure from '../ModailProcedure/FormRefuseConnectProcedure';
import FormRefuseCeonnectUserProcedure from '../ModailProcedure/FormRefuseCeonnectUserProcedure';

interface IProps {
  infoUser: IUserInfo;
}

export default function ConnectHistory({ infoUser }: IProps) {
  const [job, setConnect] = useState<IConnect[]>();

  useEffect(() => {
    const fetchConnect = async () => {
      try {
        const res = await getConnect({ id: infoUser?.id });
        setConnect(res);
      } catch (ex) {
        console.log(ex);
      }
    };
    fetchConnect();
  }, []);
  console.log(job);
  // const sortedJobs = job?.sort((a, b) => b.id - a.id);
  return (
    <div
      className={
        'bg-white shadow rounded-lg p-6 relative w-full overflow-x-auto px-4 border-l-2  '
      }
    >
      <div>
        <h3
          className={
            'text-lg font-bold uppercase leading-8 text-gray-700 border-b pt-5 pb-3 text-center border-b-gray-300'
          }
        >
          {' '}
          Trạng thái kết nối
        </h3>
        <table className={'w-full text-sm text-left text-gray-500 0'}>
          <thead
            className={'text-xs text-gray-700 uppercase bg-gray-50  border-b'}
          >
            <tr>
              <th className={'px-6 py-4'}>Tên</th>
              <th className={'px-6 py-4'}>Trạng thái gia sư</th>
              <th className={'px-6 py-4'}>Trạng thái người dùng</th>
              {infoUser?.role == 3 ? (
                <th className={'px-6 py-4 text-center'}>Action</th>
              ) : (
                <th className={'px-6 py-4 text-center'}>Lý do</th>
              )}
              {infoUser?.role == 2 ? (
                <th className={'px-6 py-4 text-center'}>Action</th>
              ) : (
                <th className={'px-6 py-4 text-center'}>Lý do</th>
              )}
              <th className={'px-6 py-4'}>Trạng thái kết nối</th>
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
                      {infoUser.role == 3
                        ? `${items?.userName}`
                        : `${items?.teacherName}`}
                    </div>
                  </th>

                  <td className={'px-10 py-4'}>
                    {items?.confirm_teacher == 0 ? (
                      <div
                        className={
                          'flex items-center before:h-2.5 before:w-2.5 before:rounded-full before:bg-orange-500 before:mr-2'
                        }
                      >
                        Chờ xác nhận
                      </div>
                    ) : items?.confirm_teacher == 1 ? (
                      <div
                        className={
                          'flex items-center before:h-2.5 before:w-2.5 before:rounded-full before:bg-green-500 before:mr-2'
                        }
                      >
                        Đã kết nối
                      </div>
                    ) : (
                      <div
                        className={
                          'flex items-center before:h-2.5 before:w-2.5 before:rounded-full before:bg-red-600 before:mr-2'
                        }
                      >
                        Chưa kết nối
                      </div>
                    )}
                  </td>
                  <td className={'px-10 py-4'}>
                    {items?.confirm_user == 0 ? (
                      <div
                        className={
                          'flex items-center before:h-2.5 before:w-2.5 before:rounded-full before:bg-orange-500 before:mr-2'
                        }
                      >
                        Chờ xác nhận
                      </div>
                    ) : items?.confirm_user == 1 ? (
                      <div
                        className={
                          'flex items-center before:h-2.5 before:w-2.5 before:rounded-full before:bg-green-500 before:mr-2'
                        }
                      >
                        Đã kết nối
                      </div>
                    ) : (
                      <div
                        className={
                          'flex items-center before:h-2.5 before:w-2.5 before:rounded-full before:bg-red-600 before:mr-2'
                        }
                      >
                        Chưa kết nối
                      </div>
                    )}
                  </td>
                  <td className="py-4 text-center">
                    {infoUser?.role == 3 ? (
                      items?.confirm_teacher === 0 ? (
                        <>
                          <div className="inline-grid grid-cols-2 gap-2">
                            <FormCeonnectProcedure user={items} />
                            <FormRefuseConnectProcedure user={items} />
                          </div>
                        </>
                      ) : items?.confirm_teacher === 1 ? (
                        'Đã xác nhận'
                      ) : items?.confirm_teacher === 2 ? (
                        'Đã từ chối'
                      ) : null
                    ) : (
                      <span>{items?.note_teacher}</span>
                    )}
                  </td>
                  <td className="py-4 text-center">
                    {infoUser?.role == 2 ? (
                      items?.confirm_user === 0 ? (
                        <>
                          <div className="inline-grid grid-cols-2 gap-2">
                            <FormCeonnectUserProcedure user={items} />
                            <FormRefuseCeonnectUserProcedure user={items} />
                          </div>
                        </>
                      ) : items?.confirm_user === 1 ? (
                        'Đã xác nhận'
                      ) : items?.confirm_user === 2 ? (
                        'Đã từ chối'
                      ) : null
                    ) : (
                      <span>{items?.note_user}</span>
                    )}
                  </td>
                  {/* <td className="px-6 py-4">
                    {infoUser?.role == 2 ? (
                      items?.confirm_user !== 0 ? (
                        'Đã xác nhận'
                      ) : (
                        <FormCeonnectUserProcedure user={items} />
                      )
                    ) : (
                      <span>{items?.note_user}</span>
                    )}
                  </td> */}
                  {/* <td className={'px-10 py-4'}>
                    {infoUser?.role == 2 ? (
                      <ModailDetailUser user={items} />
                    ) : (
                      <ModailDetail user={items} />
                    )}
                  </td> */}
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
                        Hoàn thành kết nối
                      </div>
                    ) : (
                      <div
                        className={
                          'flex items-center before:h-2.5 before:w-2.5 before:rounded-full before:bg-red-600 before:mr-2'
                        }
                      >
                        Kết nối thất bại
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
