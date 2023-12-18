'use client';
import React, { useEffect, useState } from 'react';
import MyModalTransition, {
  ModalTitle,
} from '@/components/Headless/ModalTransition';

import { IUserInfo } from '@/types/IUserInfo';
import { Field, Form, Formik } from 'formik';
import { certificatePublic, deleteCertificatePublic } from '@/services/put';
import { toast } from 'react-toastify';

interface IProps {
  infoUser: IUserInfo;
}
const SelectCertificate = ({ infoUser }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const imageCertificate = JSON.parse(infoUser.Certificate);
  const imageCertificatePublic = JSON.parse(infoUser?.Certificate_public);

  console.log(infoUser);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const reloadPageAfterDelay = () => {
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  return (
    <div>
      <div>
        <button
          onClick={openModal}
          className={
            'font-medium text-blue-6000 border py-2 px-4 rounded-lg hover:bg-blue-tw1 hover:text-white'
          }
        >
          Chọn ảnh
        </button>

        <MyModalTransition visible={isOpen} onClose={closeModal}>
          <ModalTitle>Ảnh chứng chỉ hiện trang chủ</ModalTitle>
          <div className={'p-4 flex flex-col gap-3'}>
            <Formik
              initialValues={{ id: infoUser?.id }}
              onSubmit={async (values) => {
                console.log(values);
                try {
                  const res = await certificatePublic(values);
                  toast.success('Thêm ảnh chứng chỉ ở trang chủ thành công !', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                  });
                  reloadPageAfterDelay();
                } catch (ex) {
                  toast.error(
                    'Thêm ảnh chứng chỉ ở trang chủ thất bại! Vui lòng thử lại.',
                    {
                      position: 'top-right',
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: 'light',
                    },
                  );
                }
              }}
            >
              <Form className={'flex flex-col gap-3'}>
                <p
                  className={
                    'text-sm font-bold uppercase leading-8 text-gray-700'
                  }
                >
                  Kho ảnh chứng chỉ
                </p>
                <div className={'flex gap-4 border p-3'}>
                  {imageCertificate?.map((item: string, index: number) => {
                    const isItemDisabled =
                      imageCertificatePublic.includes(item);
                    return (
                      <div key={index} className={'flex flex-col gap-2'}>
                        <picture>
                          <img className={'w-20 h-20'} src={item} alt={'abc'} />
                        </picture>
                        <Field
                          type="checkbox"
                          name="Certificate_public"
                          value={item}
                          disabled={isItemDisabled}
                        />
                      </div>
                    );
                  })}
                </div>
                <button
                  type={'submit'}
                  className={
                    'font-medium text-blue-6000 border py-2 px-4 hover:bg-blue-tw1 hover:text-white rounded-md'
                  }
                >
                  Chọn ảnh
                </button>
              </Form>
            </Formik>
            <Formik
              initialValues={{ id: infoUser.id, delete_certificate: '' }}
              onSubmit={async (values) => {
                console.log(values);
                try {
                  const res = await deleteCertificatePublic({ ...values });
                  toast.success('Gỡ ảnh chứng chỉ ở trang chủ thành công !', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                  });
                  reloadPageAfterDelay();
                } catch (ex) {
                  toast.error(
                    'Gỡ ảnh chứng chỉ ở trang chủ lỗi! Vui lòng thử lại.',
                    {
                      position: 'top-right',
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: 'light',
                    },
                  );
                }
              }}
            >
              <Form className={'flex flex-col gap-3'}>
                <p
                  className={
                    'text-sm font-bold uppercase leading-8 text-gray-700'
                  }
                >
                  Ảnh chứng chỉ hiện ở trang chủ
                </p>
                <div
                  className={'flex gap-4 border p-3 min-h-[127px]'}
                  role="group"
                  aria-labelledby="checkbox-group"
                >
                  {imageCertificatePublic?.map(
                    (item: string, index: number) => {
                      return (
                        <div key={index} className={'flex flex-col gap-2'}>
                          <picture>
                            <img
                              className={'w-20 h-20'}
                              src={item}
                              alt={'abc'}
                            />
                          </picture>
                          <Field
                            type="checkbox"
                            name="delete_certificate"
                            value={item}
                          />
                        </div>
                      );
                    },
                  )}
                </div>
                {imageCertificatePublic ? (
                  <button
                    type={'submit'}
                    className={
                      'font-medium text-blue-6000 border py-2 px-4 hover:bg-blue-tw1 hover:text-white rounded-md'
                    }
                  >
                    Xóa ảnh
                  </button>
                ) : (
                  ''
                )}
              </Form>
            </Formik>
          </div>
        </MyModalTransition>
      </div>
    </div>
  );
};

export default SelectCertificate;
