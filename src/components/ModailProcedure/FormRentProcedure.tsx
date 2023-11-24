'use client';
import React, { useState } from 'react';
import MyModal, { ModalTitle } from '@/components/Headless/Modal';
import { useParams } from 'next/navigation';
import RentTeacher from '../Teacher/RentTeacher';
import { useStore } from '@/hook/use-store';
import { ITeachers } from '@/types/ITeachers';
import toast from 'react-hot-toast';
interface IProps {
  id: number;
  teacher: any;
}

export default function FormRentProcedure(props: IProps) {
  const [user] = useStore<ITeachers>('userInfo');
  const [teacher, setTeachers] = useState<ITeachers>();
  const [isOpen, setIsOpen] = useState(false);
  const { id: params } = useParams();
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    if (!user) {
      toast.error('Vui lòng đăng nhập !', {
        duration: 3000,
      });
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div>
      {user?.role !== 'teacher' ? (
        <button
          onClick={openModal}
          className={
            'mt-16 text-center bg-blue-tw1 hover:bg-blue-tw w-[90%] h-12 rounded-md text-lg leading-normal tracking-normal text-white  uppercase'
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

          <RentTeacher id={Number(params)} teacher={teacher} />
        </div>
      </MyModal>
    </div>
  );
}
