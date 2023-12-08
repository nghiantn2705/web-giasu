import React, { useEffect, useState } from 'react';
import ToggleSwitch from '@/components/ToggleSwitch/ToggleSwitch';
import { IUserInfo } from '@/types/IUserInfo';
import { toast } from 'react-toastify';
import { putStatusCertificate } from '@/services/put';
interface IProps {
  infoUser: IUserInfo;
}
function TargetImage({ infoUser }: IProps) {
  const [isChecked, setIsChecked] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(false);
  useEffect(() => {
    if (infoUser.status_certificate == 0) {
      setIsChecked(false);
      setIsReadOnly(false);
    }
    if (infoUser.status_certificate == 1) {
      setIsChecked(true);
      setIsReadOnly(false);
    }
  }, [infoUser?.status_certificate]);
  const handleToggle = async () => {
    const valuesOn = { status_certificate: 1, id: infoUser?.id };
    const valuesOff = { status_certificate: 0, id: infoUser?.id };
    try {
      if (infoUser.status == 1) {
        const res = await putStatusCertificate(valuesOff);
        setIsChecked(false);
        toast.success('Tắt hiện ảnh chứng chỉ thành công!', {
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
        const res = await putStatusCertificate(valuesOn);
        setIsChecked(true);
        toast.success('Bật hiện ảnh chứng chỉ thành công!', {
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
    } catch (e) {
      toast.error('Tắt hiện ảnh chứng chỉ không thành công!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
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
