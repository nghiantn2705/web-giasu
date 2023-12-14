'use client';
import React, { useState } from 'react';
import MyModal, { ModalTitle } from '@/components/Headless/Modal';
import { useParams } from 'next/navigation';
import RentTeacher from '../Teacher/RentTeacher';
import { useStore } from '@/hook/use-store';
import { ITeachers } from '@/types/ITeachers';
import { toast } from 'react-toastify';

export default function FormRentProcedure() {
  const [user] = useStore<ITeachers>('userInfo');
  const [isOpen, setIsOpen] = useState(false);
  const { id: params } = useParams();
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    if (!user) {
      toast.error('Vui lòng đăng nhập !', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else {
      setIsOpen(true);
    }
  };
  return (
    <div>
      {user?.role == 2 ? (
        <button
          onClick={openModal}
          className={
            'text-center bg-blue-tw1 hover:bg-blue-tw h-12 w-full rounded-md text-lg leading-normal tracking-normal text-white  uppercase'
          }
        >
          Thuê
        </button>
      ) : (
        ''
      )}

      <MyModal visible={isOpen} onClose={closeModal}>
        <div className={'w-[800px]'}>
          <ModalTitle>Điều khoản thuê gia sư</ModalTitle>
          <div className={'text-xl px-10 py-5 font-bold'}>
            <p className={' px-5 py-5'}>
              {' '}
              • Người thuê bắt buộc phải có số dư trong tài khoản ít nhất
              <span className={'text-red-600'}> 50.000đ </span>thì mới có thể
              thực hiện việc thuê gia sư.
            </p>
            <p className={' px-5 py-5'}>
              • Trường hợp tài khoản không đủ số dư, người thuê cần tiến hành
              bước nạp tiền để tiếp tục việc thuê gia sư.
            </p>
            <p className={' px-5 pt-5'}>
              • Nếu người thuê không tiến hành bước nạp tiền thì sẽ đồng nghĩa
              với việc không có thông tin liên hệ của gia sư.
            </p>
          </div>
          <div className={'text-center'}>
            <RentTeacher id={Number(params)} />
          </div>
        </div>
      </MyModal>
    </div>
  );
}
