'use client';
import React, { useState } from 'react';
import MyModal, { ModalTitle } from '@/components/Headless/Modal';

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

export default function FormProcedure({ user }: IJob) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(user);
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
        <div className={''}>
          <ModalTitle>Xác nhận thuê</ModalTitle>
          <p>
            Gia sư bắt buộc phải có số dư trong tài khoản ít nhất 50.000đ thì
            mới có thể thực hiện việc xác nhận dạy. • Trường hợp tài khoản không
            đủ số dư, gia sư cần tiến hành bước nạp tiền để tiếp tục việc xác
            nhận dạy. • Nếu gia sư không xác nhận thì sẽ đồng nghĩa với việc
            không có thông tin liên hệ của người thuê.{' '}
          </p>
        </div>
      </MyModal>
    </div>
  );
}
