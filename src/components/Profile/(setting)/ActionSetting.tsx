'use client';

import { useState } from 'react';
import ToggleSwitch from '@/components/ToggleSwitch/ToggleSwitch';
import SelectCertificate from '@/components/ToggleSwitch/Target/SelectCertificate';
import { IUserInfo } from '@/types/IUserInfo';

import TargetCv from '@/components/ToggleSwitch/Target/TargetCV';
import TargetImage from '@/components/ToggleSwitch/Target/TargetImage';
interface IProps {
  infoUser: IUserInfo;
}

export default function ActionSetting({ infoUser }: IProps) {
  return (
    <div>
      <div className={'flex flex-col gap-3'}>
        <h3>Tài khoản</h3>
        <TargetCv infoUser={infoUser} />
        <TargetImage infoUser={infoUser} />
        <h3>Hiển thị ảnh chứng chỉ</h3>
        <SelectCertificate />
      </div>
    </div>
  );
}
