/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
'use client';

import React, { useEffect, useState } from 'react';
import MyModal, { ModalTitle } from '@/components/Headless/Modal';
import { Form, Button, Select, message } from 'antd';
import { useStore } from '@/hook/use-store';
import { ITeachers } from '@/types/ITeachers';
import toast from 'react-hot-toast';
import { getSubjectAndClass } from '@/services/get';
import { postJob } from '@/services/job';
import { useParams } from 'next/navigation';
import { ISubjectAndClass } from '@/types/ISubjectAndClass';

interface IProps {
  id: number;
  teacher: any;
}
export default function RentTeacher(props: IProps) {
  const [user] = useStore<ITeachers>('userInfo');
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const [subjectAndClass, setSubjectAndClass] = useState<ISubjectAndClass>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resSubjectAndClass = await getSubjectAndClass({ id });
        setSubjectAndClass(resSubjectAndClass);
      } catch (error) {
        console.error(error);
        toast.error(
          'Failed to fetch subjects and classes. Please try again later.',
        );
      }
    };

    fetchData();
  }, [id]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    if (parseInt(user.coin) < 50000 || user.coin == null) {
      toast.error('Vui lòng Nạp tiền !', { duration: 3000 });
    } else {
      setIsOpen(true);
    }
  };

  const onFinish = async (values: any) => {
    values.id_user = user?.id;
    values.id_teacher = props?.id;
    values.class = values.class.join(',');
    values.subject = values.subject.join(',');

    try {
      const response = await postJob({ ...values });
      message.success('Vui lòng đợi gia sư đồng ý!');
      console.log(response);
    } catch (error) {
      message.error('Có lỗi xảy ra. Vui lòng thử lại sau.');
      console.error(error);
    }
  };

  return (
    <div>
      {user?.role !== 3 ? (
        <button
          onClick={openModal}
          className={
            'mt-5 mb-8 mx-auto text-center bg-blue-tw1 hover:bg-blue-tw w-[50%] h-12 rounded-md text-lg leading-normal tracking-normal text-white  '
          }
        >
          Xác nhận thuê
        </button>
      ) : (
        ''
      )}

      <MyModal visible={isOpen} onClose={closeModal}>
        <div className={'w-[600px]'}>
          <ModalTitle>Thuê gia sư</ModalTitle>
          <Form
            className={'flex flex-col gap-5 pt-5 font-medium'}
            name="jobForm"
            onFinish={onFinish}
            initialValues={{
              id_user: user?.id,
              id_teacher: props?.id,
            }}
          >
            <div className={'flex flex-col gap-5 px-5'}>
              <Form.Item label="Người thuê">
                <span>{user?.name}</span>
              </Form.Item>
              <div>
                <Form.Item label="Lớp học" name="class">
                  <Select mode="multiple" allowClear className={'form-input'}>
                    {subjectAndClass?.class_id?.map((i) => (
                      <Select.Option key={i?.id} value={`${i?.id}`}>
                        {i?.class}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>
              <div>
                <Form.Item label="Môn học" name="subject">
                  <Select mode="multiple" allowClear className={'form-input'}>
                    {subjectAndClass?.subject?.map((item) => (
                      <Select.Option key={item?.id} value={`${item?.id}`}>
                        {item?.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>
              <Form.Item
                wrapperCol={{ offset: 8, span: 16 }}
                className={'text-right '}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  className={
                    ' bg-blue-tw text-sx font-medium text-slate-100 hover:bg-red-600 '
                  }
                  onClick={closeModal}
                >
                  Thuê
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </MyModal>
    </div>
  );
}
