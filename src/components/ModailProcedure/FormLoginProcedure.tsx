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
      <button className={'text-red-500 font-bold text-sm'} onClick={openModal}>
        Xem điều khoản
      </button>

      <MyModal visible={isOpen} onClose={closeModal}>
        <div className={'w-[800px] h-[700px] overflow-auto'}>
          <ModalTitle>Điều khoản web gia sư GS7</ModalTitle>
          <h1 className={'font-bold text-xl px-5 pt-4'}>
            I. Quy định thanh toán
          </h1>
          <div className={'text-xl px-10 pt-2'}>
            <div>
              <h2 className={'px-5 font-bold py-2'}>1. Đối với gia sư:</h2>
              <p className={' px-5 py-2'}>
                {' '}
                • Gia sư bắt buộc phải có số dư trong tài khoản ít nhất{' '}
                <span className={'text-red-500 font-bold'}>50.000đ </span>
                thì mới có thể thực hiện việc xác nhận dạy.
              </p>
              <p className={' px-5 py-2'}>
                • Nếu gia sư không xác nhận thì sẽ đồng nghĩa với việc không có
                thông tin liên hệ của người thuê.
              </p>
            </div>
            <div>
              <h2 className={'px-5 font-bold py-2'}>1. Đối với người thuê:</h2>
              <p className={' px-5 py-2'}>
                {' '}
                • Người thuê bắt buộc phải có số dư trong tài khoản ít nhất{' '}
                <span className={'text-red-500 font-bold'}>50.000đ </span>
                thì mới có thể thực hiện việc thuê gia sư.
              </p>
              <p className={' px-5 py-2'}>
                • Nếu người thuê không tiến hành bước nạp tiền thì sẽ đồng nghĩa
                với việc không có thông tin liên hệ của gia sư.
              </p>
              <p className={' px-5 py-2'}>
                • Nếu gia sư không xác nhận thì sẽ đồng nghĩa với việc không có
                thông tin liên hệ của người thuê.
              </p>
            </div>
          </div>
          <h1 className={'font-bold text-xl px-5 pt-4'}>
            II. Chính sách hoàn trả
          </h1>
          <div className={'text-xl px-10  pt-2'}>
            <p className={' px-5 py-1'}>
              {' '}
              • <span className={'text-red-600 font-bold'}>
                Trường hợp 1:
              </span>{' '}
              Gia sư và người thuê xác nhận{' '}
              <span className={' font-bold'}>ĐÃ KẾT NỐI </span> được với nhau
              thì hệ thống sẽ hoàn lại{' '}
              <span className={'text-red-600 font-bold'}>50%</span> số tiền nạp
              vào ban đầu cho cả phía gia sư và người thuê.
            </p>
            <p className={' px-5  py-1'}>
              • <span className={'text-red-600 font-bold'}>Trường hợp 2:</span>{' '}
              Gia sư
              <span className={' font-bold'}> KHÔNG KẾT NỐI </span> được với
              người thuê thì hệ thống sẽ thông báo cho người thuê và hoàn lại{' '}
              <span className={'text-red-600 font-bold'}>80%</span> số tiền nạp
              vào ban đầu cho gia sư.
            </p>
            <p className={' px-5  py-1'}>
              • <span className={'text-red-600 font-bold'}>Trường hợp 3:</span>{' '}
              Người thuê
              <span className={' font-bold'}> KHÔNG KẾT NỐI </span> được với gia
              sư thì hệ thống sẽ thông báo cho gia sư và hoàn lại{' '}
              <span className={'text-red-600 font-bold'}>80%</span> số tiền nạp
              vào ban đầu cho người thuê.
            </p>
            <p className={' px-5 py-1 '}>
              • <span className={'text-red-600 font-bold'}>Trường hợp 4:</span>{' '}
              Cả phía gia sư và người thuê đều xác nhận{' '}
              <span className={' font-bold'}> KHÔNG KẾT NỐI </span> được với
              nhau thì hệ thống sẽ hoàn lại{' '}
              <span className={'text-red-600font-bold'}>80%</span>số tiền nạp
              vào ban đầu cho cả 2 bên.
            </p>
            <p className={' px-5 py-1 '}>
              • <span className={'text-red-600 font-bold'}>Trường hợp 5:</span>{' '}
              Gia sư xác nhận <span className={' font-bold'}> TỪ CHỐI </span>dạy
              thì hệ thống sẽ hoàn lại{' '}
              <span className={'text-red-600 font-bold'}>100%</span> số tiền cọc
              ban đầu cho người dùng.
            </p>
          </div>
          <div>
            <p className={'text-xl font-bold px-5 py-5'}>
              Việc sử dụng dịch vụ “Nhận dạy” và “thuê gia sư” được áp dụng theo
              điều khoản và điều kiện của chúng tôi. Việc nạp tiền để sử dụng
              dịch vụ này đồng nghĩa với việc bạn đã đồng ý và tuân theo các
              điều khoản đã nêu trên.
            </p>
          </div>
        </div>
      </MyModal>
    </div>
  );
}
