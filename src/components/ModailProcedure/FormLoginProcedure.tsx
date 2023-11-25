'use client';
import React, { useState } from 'react';
import MyModal, { ModalTitle } from '@/components/Headless/Modal';
import {} from '@/services';

export default function FormLoginProcedure() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <button className={'text-red-500 font-bold'} onClick={openModal}>
        Xem điều khoản
      </button>

      <MyModal visible={isOpen} onClose={closeModal}>
        <div className={'w-[1000px]'}>
          <ModalTitle>Điều khoản web gia sư GS7</ModalTitle>
          <div className={'text-xl px-10 py-5 '}>
            <p className={' px-5 py-5'}>
              {' '}
              • <span className={'text-red-600'}>Trường hợp 1:</span> Gia sư và
              người thuê xác nhận ĐÃ KẾT NỐI được với nhau thì hệ thống sẽ hoàn
              lại <span className={'text-red-600'}>50%</span> số tiền nạp vào
              ban đầu cho cả phía gia sư và người thuê.
            </p>
            <p className={' px-5 py-5'}>
              • <span className={'text-red-600'}>Trường hợp 2:</span> Gia sư
              KHÔNG kết nối được với người thuê thì hệ thống sẽ thông báo cho
              người thuê và hoàn lại <span className={'text-red-600'}>80%</span>{' '}
              số tiền nạp vào ban đầu cho gia sư.
            </p>
            <p className={' px-5 pt-5'}>
              • <span className={'text-red-600'}>Trường hợp 3:</span> Người thuê
              KHÔNG kết nối được với gia sư thì hệ thống sẽ thông báo cho gia sư
              và hoàn lại <span className={'text-red-600'}>80%</span> số tiền
              nạp vào ban đầu cho người thuê.
            </p>
            <p className={' px-5 pt-5'}>
              <span className={'text-red-600'}>Trường hợp 4:</span> Cả phía gia
              sư và người thuê đều xác nhận KHÔNG KẾT NỐI ĐƯỢC với nhau thì hệ
              thống sẽ hoàn lại <span className={'text-red-600'}>80%</span>số
              tiền nạp vào ban đầu cho cả 2 bên.
            </p>
            <p className={' px-5 pt-5'}>
              <span className={'text-red-600'}>Trường hợp 5:</span> Gia sư xác
              nhận TỪ CHỐI dạy thì hệ thống sẽ hoàn lại{' '}
              <span className={'text-red-600'}>100%</span> số tiền cọc ban đầu
              cho người dùng.
            </p>
          </div>
          <div className={'text-xl px-10 py-2 '}>
            <p className={' px-5 py-2'}>
              {' '}
              • <span className={'text-red-600'}>Trường hợp 1:</span> Gia sư và
              người thuê xác nhận ĐÃ KẾT NỐI được với nhau thì hệ thống sẽ hoàn
              lại <span className={'text-red-600'}>50%</span> số tiền nạp vào
              ban đầu cho cả phía gia sư và người thuê.
            </p>
            <p className={' px-5 py-2'}>
              • <span className={'text-red-600'}>Trường hợp 2:</span> Gia sư
              KHÔNG kết nối được với người thuê thì hệ thống sẽ thông báo cho
              người thuê và hoàn lại <span className={'text-red-600'}>80%</span>{' '}
              số tiền nạp vào ban đầu cho gia sư.
            </p>
            <p className={' px-5 py-2'}>
              • <span className={'text-red-600'}>Trường hợp 3:</span> Người thuê
              KHÔNG kết nối được với gia sư thì hệ thống sẽ thông báo cho gia sư
              và hoàn lại <span className={'text-red-600'}>80%</span> số tiền
              nạp vào ban đầu cho người thuê.
            </p>
            <p className={' px-5 py-2'}>
              <span className={'text-red-600'}>Trường hợp 4:</span> Cả phía gia
              sư và người thuê đều xác nhận KHÔNG KẾT NỐI ĐƯỢC với nhau thì hệ
              thống sẽ hoàn lại <span className={'text-red-600'}>80%</span>số
              tiền nạp vào ban đầu cho cả 2 bên.
            </p>
            <p className={' px-5 py-2'}>
              <span className={'text-red-600'}>Trường hợp 5:</span> Gia sư xác
              nhận TỪ CHỐI dạy thì hệ thống sẽ hoàn lại{' '}
              <span className={'text-red-600'}>100%</span> số tiền cọc ban đầu
              cho người dùng.
            </p>
          </div>
        </div>
      </MyModal>
    </div>
  );
}
