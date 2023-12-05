/* eslint-disable no-unused-vars */
'use client';

import React from 'react';

import { IUserInfo } from '@/types/IUserInfo';
import { Image } from 'antd';
import { FaUserEdit } from 'react-icons/fa';

import ActionSetting from '@/components/Profile/(setting)/ActionSetting';
import InfoProfile from '@/components/Profile/(ProfileUser)/InfoProfile';
interface IProps {
  infoUser: IUserInfo;
}
const InfoUser = ({ infoUser }: IProps) => {
  const revert: any = infoUser?.Certificate;
  const certificateImages = JSON.parse(revert);
  return (
    <>
      <div className={'w-full py-8 flex flex-col gap-8'}>
        <div
          className={
            'max-w-3xl flex gap-4 border px-4 py-6 rounded-2xl bg-white bg-clip-border'
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
              {infoUser?.role == 'user' ? 'Người thuê gia sư' : 'Gia sư'}
            </span>
            <span className={'italic text-sm text-green-500'}>
              Đang hiện hồ sơ
            </span>
          </div>
        </div>
        <div className={'grid grid-cols-3 gap-4'}>
          <div
            className={
              'flex flex-col gap-4 border py-2 px-4 rounded-xl drop-shadow-md bg-white'
            }
          >
            <h3 className={'text-lg font-bold'}>Cài đặt hiển thị</h3>
            <ActionSetting />
          </div>
          <div
            className={
              'flex flex-col gap-4 border py-2 px-4 rounded-xl drop-shadow-md bg-white'
            }
          >
            <div className={'flex justify-between items-center'}>
              <h3 className={'text-lg font-bold'}>Thông tin người dùng</h3>
              <FaUserEdit />
            </div>
            <InfoProfile infoUser={infoUser} />
          </div>
          <div
            className={
              'flex flex-col gap-4 border py-2 px-4 rounded-xl drop-shadow-md bg-white'
            }
          >
            <h3 className={'text-lg font-bold'}>Những người đã thuê</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoUser;
