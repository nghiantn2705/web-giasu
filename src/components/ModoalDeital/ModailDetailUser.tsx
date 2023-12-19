/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
'use client';
import React, { useEffect, useState } from 'react';
import MyModal, { ModalTitle } from '@/components/Headless/Modal';
import {} from '@/services';
import { FaEye } from 'react-icons/fa';
import { getJobDetail } from '@/services/job';
import { IUserInfo } from '@/types/IUserInfo';
interface IJobDetail {
  nameUser: string;
  nameTeacher: string;
  emailUser: string;
  emailTeacher: string;
  phoneUser: string;
  phoneTeacher: string;
  addressUser: string;
  addressTeacher: string;
}
interface IProps {
  infoUser: IUserInfo;
}

export default function ModailDetailUser({ user }: IProps) {
  const [detail, setDetail] = useState<IJobDetail>();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    (async () => {
      const resTeacher = await getJobDetail({ id: user?.id });

      setDetail(resTeacher);
    })();
  }, [user?.id]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <div onClick={openModal}>
        {' '}
        <FaEye />
      </div>

      <MyModal visible={isOpen} onClose={closeModal}>
        <div className={'w-[800px]'}>
          <ModalTitle>Thông tin </ModalTitle>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-3 py-5">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-800">
              <thead className="text-xs text-gray-700 uppercase dark:text-gray-400 ">
                <tr className={'text-base'}>
                  <th
                    scope="col"
                    className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                  >
                    Họ và tên
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Gmail
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                  >
                    Số điện thoại
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Địa chỉ
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-400 dark:border-gray-800 text-base">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800 "
                  >
                    <p>{detail?.nameTeacher}</p>
                  </th>
                  <td className="px-6 py-4">
                    <p>{detail?.emailTeacher}</p>
                  </td>
                  <td className="px-6 py-4  dark:bg-gray-800">
                    <p>{detail?.phoneTeacher}</p>
                  </td>
                  <td className="px-6 py-4">
                    {' '}
                    <p>{detail?.addressTeacher}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </MyModal>
    </div>
  );
}
