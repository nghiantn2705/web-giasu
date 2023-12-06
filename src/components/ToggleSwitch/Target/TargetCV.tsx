import React, { useEffect, useState } from 'react';
import ToggleSwitch from '@/components/ToggleSwitch/ToggleSwitch';
import { IUserInfo } from '@/types/IUserInfo';
import { putStatusCV } from '@/services/put';
import { toast } from 'react-toastify';
interface IProps {
  infoUser: IUserInfo;
}
function TargetCv({ infoUser }: IProps) {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(false);
  useEffect(() => {
    if (infoUser.status == 1) {
      setIsChecked1(true);
      setIsReadOnly(false);
    }
    if (infoUser.status == 2) {
      setIsReadOnly(true);
    }
    if (infoUser.status == 3) {
      setIsChecked1(false);
      setIsReadOnly(false);
    }
  }, [infoUser?.status]);
  const handleToggle1 = async () => {
    const valuesOn = { status: 1, id: infoUser?.id };
    const valuesOff = { status: 3, id: infoUser?.id };
    if (infoUser.status == 1) {
      const res = await putStatusCV(valuesOff);
      setIsChecked1(false);
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
      const res = await putStatusCV(valuesOn);
      setIsChecked1(true);
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
        idToggle={'1'}
        isChecked={isChecked1}
        onToggle={handleToggle1}
        readOnly={isReadOnly}
      >
        Trạng thái hồ sơ
      </ToggleSwitch>
    </>
  );
}

export default TargetCv;
