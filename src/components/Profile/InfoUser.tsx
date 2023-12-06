/* eslint-disable no-unused-vars */
'use client';

import React from 'react';

import { IUserInfo } from '@/types/IUserInfo';
import { Image } from 'antd';
import { FaUserEdit } from 'react-icons/fa';

import ActionSetting from '@/components/Profile/(setting)/ActionSetting';
import InfoProfile from '@/components/Profile/(ProfileUser)/InfoProfile';
import ConnectH from '@/components/Profile/(Connect)/ConnectH';
interface IProps {
  infoUser: IUserInfo;
}
const InfoUser = ({ infoUser }: IProps) => {
  const revert: any = infoUser?.Certificate;
  const certificateImages = JSON.parse(revert);
  return (
    <>
      <div className={'grid grid-cols-3 gap-4'}>
        {infoUser?.role == 'teacher' ? (
          <div
            className={
              'flex flex-col gap-4 border py-2 px-4 rounded-xl drop-shadow-md bg-white'
            }
          >
            <h3 className={'text-lg font-bold'}>Cài đặt hiển thị</h3>
            <ActionSetting />
          </div>
        ) : (
          ''
        )}
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
          <div className={'flex justify-between items-center'}>
            <h3 className={'text-lg font-bold'}>
              {' '}
              {infoUser?.role == 'user'
                ? 'Gia sư bạn đã thuê'
                : 'Những người đã thuê bạn'}
            </h3>
            <span className={'text-sm'}>Xem thêm</span>
          </div>
          <ConnectH />
        </div>
      </div>
    </>
  );
};

export default InfoUser;
