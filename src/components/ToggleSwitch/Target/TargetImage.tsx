import React, { useEffect, useState } from 'react';
import ToggleSwitch from '@/components/ToggleSwitch/ToggleSwitch';
import { IUserInfo } from '@/types/IUserInfo';
import { toast } from 'react-toastify';
interface IProps {
  infoUser: IUserInfo;
}
function TargetImage({ infoUser }: IProps) {
  const [isChecked, setIsChecked] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(false);
  useEffect(() => {
    if (infoUser.status == 1) {
      setIsChecked(true);
      setIsReadOnly(false);
    }
    if (infoUser.status == 2) {
      setIsReadOnly(true);
    }
    if (infoUser.status == 3) {
      setIsChecked(false);
      setIsReadOnly(false);
    }
  }, [infoUser?.status]);
  const handleToggle = async () => {
    const valuesOn = { status: 1, id: infoUser?.id };
    const valuesOff = { status: 3, id: infoUser?.id };
    if (infoUser.status == 1) {
      // const res = await putStatusCV(valuesOff);
      setIsChecked(false);
      toast.success('Tắt hồ sơ thành công!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
    if (infoUser.status == 3) {
      // const res = await putStatusCV(valuesOn);
      setIsChecked(true);
      toast.success('Bật hồ sơ thành công!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  };

  return (
    <>
      <ToggleSwitch
        idToggle={'2'}
        isChecked={isChecked}
        onToggle={handleToggle}
        readOnly={isReadOnly}
      >
        Hiện ảnh chứng chỉ
      </ToggleSwitch>
    </>
  );
}

export default TargetImage;
