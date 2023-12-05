'use client';
import React, { useState } from 'react';
import MyModal, { ModalTitle } from '@/components/Headless/Modal';
import {} from '@/services';

import FormAccept from '../FormConfirmation/FormAccept';
interface IJob {
  user: {
    id: number;
    idUser: string;
    idTeacher: string;
    idSubject: string;
    subject: string[];
    class: string[];
    teacherImage: string;
    status: number;
    description: string;
  };
}

export default function FormConfirmProcedure({ user }: IJob) {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className={
          'font-medium text-blue-6000 border py-2 px-4 hover:bg-blue-tw1 hover:text-white'
        }
      >
        Xác nhận
      </button>

      <MyModal visible={isOpen} onClose={closeModal}>
        <div className={'w-[800px]'}>
          <ModalTitle>Điều khoản thuê gia sư</ModalTitle>
          <div className={'text-xl px-10 py-5 font-bold'}>
            <p className={' px-5 py-5'}>
              {' '}
              • Gia sư bắt buộc phải có số dư trong tài khoản ít nhất{' '}
              <span className={'text-red-600'}> 50.000đ </span> thì mới có thể
              thực hiện việc xác nhận dạy.
            </p>
            <p className={' px-5 py-5'}>
              • Trường hợp tài khoản không đủ số dư, gia sư cần tiến hành bước
              nạp tiền để tiếp tục việc xác nhận dạy
            </p>
            <p className={' px-5 pt-5'}>
              • Nếu gia sư không xác nhận thì sẽ đồng nghĩa với việc không có
              thông tin liên hệ của người thuê.
            </p>
          </div>
          <div className={'text-center'}>
            <FormAccept user={user} />
          </div>
        </div>
      </MyModal>
    </div>
  );
}
