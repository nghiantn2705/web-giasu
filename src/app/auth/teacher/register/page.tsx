/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import { getSubject, getClass } from '../../../../../action/get';
import RegisterTeacher from '@/components/Auth/RegisterTeacher';
import toast from 'react-hot-toast';
import { ISubject } from '@/types/ISubject';
import { RegisterUser } from '@/services';
import { useRouter } from 'next/navigation';
import { Field, Form, Formik } from 'formik';
const page = () => {
  const router = useRouter();
  const [classes, setClasses] = useState<any>();
  const [subject, setSubject] = useState<any>();
  console.log(subject);
  console.log(classes);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetch = async () => {
      try {
        const resSubject = await getSubject();
        const resClasses = await getClass();
        setSubject(resSubject);
        setClasses(resClasses);
      } catch (ex: any) {
        console.log(ex.message);
      }
    };
    fetch();
  }, [setSubject, setClasses]);
  return (
    <div className={'container mx-auto py-5 shadow-lg'}>
      <h1 className={'text-3xl font-bold'}>Hoàn thành đơn đăng kí của bạn</h1>
      <div className="">
        <div className="h-px bg-slate-400 mt-4 "></div>
        <div className="mt-10">
          <Formik
            initialValues={{ role: 1 }}
            onSubmit={(values) => {
              console.log(values);
              (async () => {
                try {
                  await RegisterUser({ ...values });
                  toast.success('Đăng kí thành công !', {
                    duration: 3000,
                    position: 'top-right',
                    icon: '✅',
                    iconTheme: {
                      primary: '#000',
                      secondary: '#fff',
                    },
                  });
                  router.push('/auth/teacher');
                } catch (ex: any) {
                  console.log(ex);
                }
              })();
            }}
          >
            <Form className={'flex flex-col gap-5'}>
              <p className="font-bold mt-10">Tạo hồ sơ cá nhân </p>
              <div className="h-px bg-slate-400 mb-4"></div>
              <div className="flex">
                <label htmlFor="name" className={'w-32 mr-32'}>
                  Họ và tên:
                </label>
                <Field
                  type={'text'}
                  name={'name'}
                  placeholder={'Học và tên'}
                  className={
                    'w-[900px] px-4 py-2 text-lg  border border-black rounded-xl'
                  }
                />
              </div>
              <div className="flex">
                <label htmlFor="email" className={'w-32 mr-32'}>
                  Email:
                </label>
                <Field
                  type={'text'}
                  name={'email'}
                  placeholder={'Email'}
                  className={
                    'w-[900px] px-4 py-2 text-lg  border border-black rounded-xl'
                  }
                />
              </div>
              <div className="flex">
                <label htmlFor="gender" className={'w-32 mr-32'}>
                  Giới tính:
                </label>
                <Field
                  as="select"
                  name="gender"
                  className={
                    'w-[900px] px-4 py-2 text-lg  border border-black rounded-xl'
                  }
                >
                  <option value="">-- Chọn giới tính --</option>
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                </Field>
              </div>
              <div className="flex">
                <label htmlFor="school_id" className={'w-32 mr-32'}>
                  Trường/ Trình độ:
                </label>
                <div className={'flex space-x-4'}>
                  {subject?.map((i: ISubject) => {
                    return (
                      <label key={i?.id}>
                        <Field
                          type={'checkbox'}
                          name={'subject'}
                          value={`${i?.id}`}
                        />
                        {i?.name}
                      </label>
                    );
                  })}
                </div>
              </div>
              <div className="flex">
                <label htmlFor="subject" className={'w-32 mr-32'}>
                  Ngày sinh:
                </label>
                <Field
                  type={'date'}
                  name={'date_of_birth'}
                  placeholder={'date_of_birth'}
                  className={
                    'w-[900px] px-4 py-2 text-lg  border border-black rounded-xl'
                  }
                />
              </div>
              <div className="flex">
                <label htmlFor="subject" className={'w-32 mr-32'}>
                  Số điện thoại:
                </label>
                <Field
                  type={'text'}
                  name={'phone'}
                  placeholder={'Số điện thoại'}
                  className={
                    'w-[900px] px-4 py-2 text-lg  border border-black rounded-xl'
                  }
                />
              </div>

              <div className="flex">
                <label htmlFor="subject" className={'w-34 mr-[80px]'}>
                  Thành phố/Quận/Huyện:
                </label>
                <Field
                  type={'text'}
                  name={'address'}
                  placeholder={'Nơi bạn đang ở'}
                  className={
                    'w-[900px] px-4 py-2 text-lg border border-black rounded-xl'
                  }
                />
              </div>
              <div className="flex">
                <label htmlFor="class_id" className={'w-32 mr-32'}>
                  Lớp:
                </label>
                <div className={'flex space-x-4'}>
                  {subject?.map((i: ISubject) => {
                    return (
                      <label key={i?.id}>
                        <Field
                          type={'checkbox'}
                          name={'subject'}
                          value={`${i?.id}`}
                        />
                        {i?.name}
                      </label>
                    );
                  })}
                </div>
              </div>
              <div className="flex">
                <label htmlFor="subject" className={'w-32 mr-32'}>
                  Môn học:
                </label>
                <div className={'flex space-x-4'}>
                  {subject?.map((i: ISubject) => {
                    return (
                      <label key={i?.id}>
                        <Field
                          type={'checkbox'}
                          name={'subject'}
                          value={`${i?.id}`}
                        />
                        {i?.name}
                      </label>
                    );
                  })}
                </div>
              </div>
              <p className="font-bold">
                Nói ngắn gọn với những học sinh tiềm năng về những gì bạn dạy và
                những bài học của bạn như thế nào:
              </p>
              <div className="flex">
                <label htmlFor="subject" className={'w-32 mr-32'}>
                  Mô tả:
                </label>
                <Field
                  type={'text'}
                  name={'description'}
                  component={'textarea'}
                  rows={'6'}
                  placeholder={'Giới thiệu về bạn'}
                  className={
                    'w-[900px] px-4 py-2 text-lg  border border-black rounded-xl'
                  }
                />
              </div>

              <button
                type={'submit'}
                className={
                  'border py-2 bg-red-400 text-white rounded-xl hover:bg-red-600 hover:text-white w-[200px] mt-4 m-auto'
                }
              >
                Đăng ký
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default page;
