'use client';

import React from 'react';

import { IUserInfo } from '@/types/IUserInfo';
import Link from 'next/link';
import { BiHistory } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { Image } from 'antd';
import EditPassword from '@/components/Profile/(EditProfile)/EditPassword';
import AddCertificate from '@/components/ToggleSwitch/Target/AddCertificate';

interface IProps {
  infoUser: IUserInfo;
  children: React.ReactNode;
}
const Profile = ({ children, infoUser }: IProps) => {
  const imageCertificate = JSON.parse(infoUser.Certificate);
  const imageCertificatePublic = JSON.parse(infoUser?.Certificate_public);
  return (
    <>
      <div className={'bg-gray-100 min-h-fit flex'}>
        <div
          className={'bg-white w-80 px-4 py-8 border-r-2 flex flex-col gap-4 '}
        >
          <a
            href={`/profile`}
            className={
              'flex items-center gap-2 border bg-white drop-shadow-md hover:bg-gray-200 rounded-lg cursor-pointer px-3 py-2'
            }
          >
            <FiSettings />
            Chỉnh sửa thông tin
          </a>
          <EditPassword />
          <a
            href={`/profile/history`}
            className={
              'flex items-center gap-2 border bg-white drop-shadow-md hover:bg-gray-200 rounded-lg cursor-pointer px-3 py-2'
            }
          >
            <BiHistory />
            Lịch sử thuê
          </a>
          <Link
            href={'/profile/history-connect'}
            className={
              'flex items-center gap-2 border bg-white drop-shadow-md hover:bg-gray-200 rounded-lg cursor-pointer px-3 py-2'
            }
          >
            <BiHistory />
            Trạng thái kết nối
          </Link>

          <Link
            href={'/profile/history-paypal'}
            className={
              'flex items-center gap-2 border bg-white drop-shadow-md hover:bg-gray-200 rounded-lg cursor-pointer px-3 py-2'
            }
          >
            <BiHistory />
            Lịch sử giao dịch
          </Link>
        </div>
        <div className={'container'}>
          <div className={'w-full py-8 flex flex-col gap-8'}>
            <div className={'flex flex-col gap-4'}>
              <div
                className={
                  'max-w-3xl w-full flex gap-4 border px-4 py-6 rounded-2xl bg-white bg-clip-border'
                }
              >
                <Image
                  className={'border rounded-xl drop-shadow-md'}
                  src={infoUser?.avatar}
                  width={80}
                  height={80}
                  alt={''}
                />
                <div className={'flex flex-col justify-between'}>
                  <h2 className={'text-2xl font-extrabold text-slate-800'}>
                    {infoUser?.name}
                  </h2>
                  <span className={'italic text-sm text-slate-500'}>
                    {infoUser?.role == 2 ? 'Người thuê gia sư' : 'Gia sư'}
                  </span>

                  {infoUser.status == 2 ? (
                    <span className={'italic text-sm text-yellow-600'}>
                      Vui lòng đợi admin duyệt hồ sơ{' '}
                    </span>
                  ) : infoUser.status == 1 ? (
                    <span className={'italic text-sm text-green-500'}>
                      Hồ sơ đang được bật trên trang chủ
                    </span>
                  ) : (
                    <span className={'italic text-sm text-red-600'}>
                      Đang tắt hồ sơ trên trang chủ
                    </span>
                  )}
                </div>
              </div>
              {infoUser?.role == 3 ? (
                <div className={'w-full grid grid-cols-2 gap-4 py-2'}>
                  <div
                    className={
                      'border py-2 px-4 rounded-xl drop-shadow-md bg-white'
                    }
                  >
                    <h3 className={'text-lg font-bold'}>Kho ảnh chứng chỉ</h3>
                    <div className={'flex flex-col gap-3'}>
                      <div className={'grid grid-cols-9 gap-3 mt-4'}>
                        {imageCertificate?.map(
                          (items: string, index: number) => {
                            return (
                              <Image
                                key={index}
                                src={items}
                                height={50}
                                width={50}
                                alt={'chứng chỉ'}
                              />
                            );
                          },
                        )}
                      </div>
                      <div className={'self-end'}>
                        <AddCertificate infoUser={infoUser} />
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      'border py-2 px-4 rounded-xl drop-shadow-md bg-white'
                    }
                  >
                    <h3 className={'text-lg font-bold'}>
                      Ảnh chứng chỉ hiện ở trang chủ
                    </h3>
                    <div className={'flex flex-col gap-3'}>
                      <div className={'grid grid-cols-9 gap-3 mt-4'}>
                        {imageCertificatePublic?.map(
                          (items: string, index: number) => {
                            return (
                              <Image
                                key={index}
                                src={items}
                                height={50}
                                width={50}
                                alt={'chứng chỉ'}
                              />
                            );
                          },
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ''
              )}
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
