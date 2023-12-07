import React, { useState } from 'react';
import MyModalTransition, {
  ModalTitle,
} from '@/components/Headless/ModalTransition';

import { IUserInfo } from '@/types/IUserInfo';
import { Field, Form, Formik } from 'formik';
import { certificatePublic } from '@/services/put';

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
  return (
    <div>
      <div>
        <button
          onClick={openModal}
          className={
            'font-medium text-blue-6000 border py-2 px-4 hover:bg-blue-tw1 hover:text-white'
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
                } catch (ex) {
                  console.log(ex);
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
                    return (
                      <div key={index} className={'flex flex-col gap-2'}>
                        <picture>
                          <img className={'w-20 h-20'} src={item} alt={'abc'} />
                        </picture>
                        <Field
                          type="checkbox"
                          name="Certificate_public"
                          value={item}
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
              initialValues={{ Certificate_public: '' }}
              onSubmit={(values) => console.log(values)}
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
                  className={'flex gap-4 border p-3'}
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
                            name="Certificate_public"
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
