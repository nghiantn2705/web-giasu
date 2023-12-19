'use client';

import React, { useEffect, useState } from 'react';
import { IUserInfo } from '@/types/IUserInfo';
import { getConnectSuccess } from '@/services/connect';
import { IConnect } from '@/types/IConect';
import { format } from 'date-fns';
interface IProps {
  infoUser: IUserInfo;
}
const ConnectH = ({ infoUser }: IProps) => {
  const [data, setData] = useState<IConnect[]>();
  useEffect(() => {
    (async () => {
      try {
        const res = await getConnectSuccess(infoUser.id);
        setData(res);
      } catch (ex: any) {
        console.log(ex);
      }
    })();
  }, [infoUser.id]);
  return (
    <>
      {infoUser.role == 3 ? (
        <div className={''}>
          {data?.length ? (
            <ul className={'flex flex-col gap-3 pl-0 mb-0 rounded-lg'}>
              {data?.map((item, index: number) => {
                return (
                  <li
                    key={index}
                    className={
                      'relative flex justify-between px-0 py-2 bg-white border-0 rounded-t-lg text-inherit'
                    }
                  >
                    <div className={'flex'}>
                      <picture
                        className={
                          'inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl'
                        }
                      >
                        <img
                          src={item?.userAvatar}
                          alt="kal"
                          className={
                            'w-full drop-shadow-sm border p-1 rounded-xl'
                          }
                        />
                      </picture>

                      <div className={'flex flex-col items-start'}>
                        <h6 className={'mb-0 leading-normal text-base'}>
                          {item?.userName}
                        </h6>
                        <p className="flex gap-2 mb-0 leading-tight text-xs">
                          {format(new Date(item?.created_at), 'HH:mm:ss')}
                          <span>
                            {format(new Date(item?.created_at), 'dd/MM/yyyy')}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div
                      className={
                        ' flex items-center text-sm before:h-2 before:w-2 before:rounded-full before:bg-green-500 before:mr-2'
                      }
                    >
                      Hoàn thành
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>Hiện chưa kết nối với ai</p>
          )}
        </div>
      ) : (
        <div className={''}>
          <ul className={'flex flex-col gap-3 pl-0 mb-0 rounded-lg'}>
            {data?.map((item, index: number) => {
              return (
                <li
                  key={index}
                  className={
                    'relative flex justify-between px-0 py-2 bg-white border-0 rounded-t-lg text-inherit'
                  }
                >
                  <div className={'flex'}>
                    <picture
                      className={
                        'inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl'
                      }
                    >
                      <img
                        src={item?.teacherAvatar}
                        alt="kal"
                        className={
                          'w-full drop-shadow-sm border p-1 rounded-xl'
                        }
                      />
                    </picture>

                    <div className={'flex flex-col items-start'}>
                      <h6 className={'mb-0 leading-normal text-base'}>
                        {item?.teacherName}
                      </h6>
                      <p className="flex gap-2 mb-0 leading-tight text-xs">
                        {format(new Date(item?.created_at), 'HH:mm:ss')}
                        <span>
                          {format(new Date(item?.created_at), 'dd/MM/yyyy')}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div
                    className={
                      ' flex items-center text-sm before:h-2 before:w-2 before:rounded-full before:bg-green-500 before:mr-2'
                    }
                  >
                    Hoàn thành
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default ConnectH;
