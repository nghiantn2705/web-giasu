/* eslint-disable no-unused-vars */
'use client';

import React from 'react';
import { IUserInfo } from '@/types/IUserInfo';
import EditProfile from '@/components/Profile/(EditProfile)/EditProfile';
import EditProfileTeacher from '@/components/Profile/(EditProfile)/EditProfileTeacher';

interface IProps {
  infoUser: IUserInfo;
}
const InfoUser = ({ infoUser }: IProps) => {
  const revert: any = infoUser?.Certificate;
  const certificateImages = JSON.parse(revert);
  return (
    <>
      <ul className="flex flex-col gap-2 justify-between pl-0 mb-0 rounded-lg h-full">
        <li className="flex gap-2 relative px-4 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-base text-inherit">
          <strong className="text-slate-700">Họ và tên:</strong>
          {infoUser?.name}
        </li>
        <li className="flex gap-2  relative px-4 pl-0 leading-normal bg-white border-0 border-t-0 text-base text-inherit">
          <strong className="text-slate-700">Số điện thoại:</strong>
          {infoUser?.phone}
        </li>
        <li className="flex gap-2 relative px-4 pl-0 leading-normal bg-white border-0 border-t-0 text-base text-inherit">
          <strong className="text-slate-700">Email:</strong>
          {infoUser?.email}
        </li>
        <li className="flex gap-2 relative px-4 pl-0 leading-normal bg-white border-0 border-t-0 text-base text-inherit">
          <strong className="text-slate-700">Địa chỉ:</strong>
          <span className={'max-w-[280px]'}>{infoUser?.address}</span>
        </li>
        <li className="flex gap-2 relative px-4 pl-0 leading-normal bg-white border-0 border-t-0 text-base text-inherit">
          <strong className="text-slate-700">Trường :</strong>
          <span className={'max-w-[280px]'}>
            {infoUser?.school.map((item) => {
              return item?.name;
            })}
          </span>
        </li>
        <li className="flex justify-end gap-2 relative px-4 pb-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
          {infoUser.role == 2 ? (
            <EditProfile editProfile={infoUser} />
          ) : (
            <EditProfileTeacher editProfile={infoUser} />
          )}
        </li>
      </ul>
    </>
  );
};

export default InfoUser;
