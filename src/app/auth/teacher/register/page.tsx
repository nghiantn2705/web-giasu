/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import { SignupSchemaTeacher } from '@/validate/index';
import toast from 'react-hot-toast';
import { ISubject } from '@/types/ISubject';
import { IClass } from '@/types/IClass';
import { RegisterUser } from '@/services';
import { useRouter } from 'next/navigation';
import { Field, Form, Formik } from 'formik';
import Image from 'next/image';
import { ISalary } from '@/types/ISalary';
import { ITimeSlot } from '@/types/ITimeSlot';
import { ISchool } from '@/types/ISchool';
import { IDisctrict } from '@/types/IDistrict';
import {
  getClass,
  getDistrict,
  getSalary,
  getSchool,
  getSubject,
  getTimeSlot,
} from '@/services/get';

const page = () => {
  const router = useRouter();
  const [classes, setClasses] = useState<IClass[]>();
  const [subject, setSubject] = useState<ISubject[]>();
  const [district, setDistrict] = useState<IDisctrict[]>();
  const [salary, setSalary] = useState<ISalary[]>();
  const [timeslot, setTimeSlot] = useState<ITimeSlot[]>();
  const [school, setSchool] = useState<ISchool[]>();

  useEffect(() => {
    (async () => {
      try {
        const resSubject = await getSubject();
        const resClasses = await getClass();
        const resDistrict = await getDistrict();
        const resSalary = await getSalary();
        const resTimeSlote = await getTimeSlot();
        const resSchool = await getSchool();
        setSubject(resSubject);
        setClasses(resClasses);
        setDistrict(resDistrict);
        setSalary(resSalary);
        setTimeSlot(resTimeSlote);
        setSchool(resSchool);
      } catch (ex: any) {
        console.log(ex.message);
      }
    })();
  }, []);
  return (
    <div className={'grid grid-cols-12 min-h-fit'}>
      <div className={'col-span-7 pt-5 pb-16  px-20'}>
        <div className={'flex flex-col items-center mb-5'}>
          <Image src={'/logo.png'} alt={''} width={100} height={100} />
          <h1 className={'text-2xl text-blue-tw'}>Chào mừng bạn đến với Gs7</h1>
          <p className={'text-gray-500'}>
            Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý
            tưởng
          </p>
        </div>
        <Formik
          initialValues={{
            role: 3,
            name: '',
            email: '',
            password: '',
            avatar: '',
            phone: '',
            address: '',
            citizen_card: '',
            education_level: '',
            Certificate: '',
            description: '',
          }}
          validationSchema={SignupSchemaTeacher}
          onSubmit={(values) => {
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
          {({ errors, touched }) => (
            <Form className={'flex flex-col'}>
              <div className={'grid grid-cols-2 gap-5'}>
                <label htmlFor={'name'} className={'flex flex-col'}>
                  Họ và Tên
                  <Field
                    type={'text'}
                    name={'name'}
                    placeholder={'Học và tên'}
                    className={'w-full px-4 py-2 text-lg  border'}
                  />
                  {errors.name && touched.name ? (
                    <div className={'text-red-600 mt-2'}>{errors.name}</div>
                  ) : null}
                </label>
                <label htmlFor={'email'} className={'flex flex-col'}>
                  Email :
                  <Field
                    type={'email'}
                    name={'email'}
                    placeholder={'Email'}
                    className={'w-full px-4 py-2 text-lg  border '}
                  />
                  {errors.email && touched.email ? (
                    <div className={'text-red-600 mt-2'}>{errors.email}</div>
                  ) : null}
                </label>
                <label htmlFor="password" className={'flex flex-col'}>
                  Mật khẩu
                  <Field
                    type={'password'}
                    name={'password'}
                    placeholder={'Mat Khau'}
                    className={'w-full px-4 py-2 text-lg  border '}
                  />
                  {errors.password && touched.password ? (
                    <div className={'text-red-600 mt-2'}>{errors.password}</div>
                  ) : null}
                </label>
                <label htmlFor={'avatar'} className={'flex flex-col'}>
                  Ảnh đại diện{' '}
                  <Field
                    type={'file'}
                    name={'avatar'}
                    placeholder={'Ảnh đại diện'}
                    className={
                      'relative w-full flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:overflow-hidden file:rounded-none file:h-full file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-2 file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none '
                    }
                  />
                  {errors.avatar && touched.avatar ? (
                    <div className={'text-red-600 mt-2'}>{errors.avatar}</div>
                  ) : null}
                </label>
                <label htmlFor={'gender'} className={'flex flex-col'}>
                  Giới tính
                  <Field
                    as="select"
                    name="gender"
                    className={'w-full px-4 py-2 text-lg  border  h-full'}
                  >
                    <option value="">-- Chọn giới tính --</option>
                    <option value="Nam">Nam</option>
                    <option value="Nữ">Nữ</option>
                  </Field>
                </label>
                <label className={'flex flex-col'} htmlFor={'date_of_birth'}>
                  Ngày sinh{' '}
                  <Field
                    type={'date'}
                    name={'date_of_birth'}
                    placeholder={'Ngày sinh'}
                    className={'w-full px-4 py-2 text-lg  border'}
                  />
                </label>
                <label className={'flex flex-col'} htmlFor={'phone'}>
                  Số điện thoại
                  <Field
                    type={'text'}
                    name={'phone'}
                    placeholder={'Số điện thoại'}
                    className={'w-full px-4 py-2 text-lg  border  '}
                  />
                  {errors.phone && touched.phone ? (
                    <div className={'text-red-600 mt-2'}>{errors.phone}</div>
                  ) : null}
                </label>
                <label className={'flex flex-col'} htmlFor={'address'}>
                  Địa chỉ nơi ở :{' '}
                  <Field
                    type={'text'}
                    name={'address'}
                    placeholder={'Nơi bạn đang ở'}
                    className={'w-full px-4 py-2 text-lg  border  '}
                  />
                  {errors.address && touched.address ? (
                    <div className={'text-red-600 mt-2'}>{errors.address}</div>
                  ) : null}
                </label>
                <label className={'flex flex-col'} htmlFor={'cmt'}>
                  Số căn cước công dân
                  <Field
                    type={'text'}
                    name={'citizen_card'}
                    placeholder={'Căn cước công dân'}
                    className={'w-full px-4 py-2 text-lg  border  '}
                  />
                  {errors.citizen_card && touched.citizen_card ? (
                    <div className={'text-red-600 mt-2'}>
                      {errors.citizen_card}
                    </div>
                  ) : null}
                </label>
                <label className={'flex flex-col'} htmlFor="education_level">
                  Trình đọc học vấn
                  <Field
                    type={'text'}
                    name={'education_level'}
                    placeholder={'Trình độ học vấn'}
                    className={'w-full px-4 py-2 text-lg  border  '}
                  />
                  {errors.education_level && touched.education_level ? (
                    <div className={'text-red-600 mt-2'}>
                      {errors.education_level}
                    </div>
                  ) : null}
                </label>
                <label className={'flex flex-col'} htmlFor={'Certificate'}>
                  Bằng cấp hộ tập{' '}
                  <Field
                    type={'text'}
                    name={'Certificate'}
                    placeholder={'Bàng cấp học tập'}
                    className={'w-full px-4 py-2 text-lg  border  '}
                  />
                  {errors.Certificate && touched.Certificate ? (
                    <div className={'text-red-600 mt-2'}>
                      {errors.Certificate}
                    </div>
                  ) : null}
                </label>
                <label className={'flex flex-col'} htmlFor={'school_id'}>
                  Đại học{' '}
                  <Field
                    name={'school_id'}
                    as={'select'}
                    className={'w-full px-4 py-2 text-lg  border  h-full'}
                  >
                    {school?.map((items: ISchool) => {
                      return (
                        <option key={items.id} value={`${items?.id}`}>
                          {items?.name}
                        </option>
                      );
                    })}
                  </Field>
                </label>
                <label className={'flex flex-col'} htmlFor={'district'}>
                  Khu vực dạy{' '}
                  <Field
                    name={'district'}
                    as={'select'}
                    className={'w-full px-4 py-2 text-lg  border  '}
                  >
                    {district?.map((items: IDisctrict) => {
                      return (
                        <option key={items.id} value={`${items?.id}`}>
                          {items?.name}
                        </option>
                      );
                    })}
                  </Field>
                </label>
                <label className={'flex flex-col'} htmlFor={'salary'}>
                  Lương{' '}
                  <Field
                    name={'salary'}
                    as={'select'}
                    className={'w-full px-4 py-2 text-lg  border  '}
                  >
                    {salary?.map((items: ISalary) => {
                      return (
                        <option key={items.id} value={`${items?.id}`}>
                          {items?.name}
                        </option>
                      );
                    })}
                  </Field>
                </label>
                <div className={'flex flex-col'}>
                  Lớp học
                  <div
                    className={'grid grid-cols-6 gap-2 justify-items-center'}
                  >
                    {classes?.map((i: IClass) => {
                      return (
                        <label key={i?.id} className={'flex gap-2'}>
                          <Field
                            type={'checkbox'}
                            name={'class_id'}
                            value={`${i?.id}`}
                          />
                          {i?.class}
                        </label>
                      );
                    })}
                  </div>
                </div>
                <div className={'flex flex-col'}>
                  Môn học
                  <div
                    className={'grid grid-cols-4 gap-2 justify-items-center'}
                  >
                    {subject?.map((i: ISubject) => {
                      return (
                        <label key={i?.id} className={'flex gap-2'}>
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
                <div className={'flex flex-col'}>
                  Ca học:
                  <div
                    className={'grid grid-cols-4 gap-2 justify-items-center'}
                  >
                    {timeslot?.map((i: ISubject) => {
                      return (
                        <label key={i?.id} className={'flex gap-2'}>
                          <Field
                            type={'checkbox'}
                            name={'timeslot'}
                            value={`${i?.id}`}
                          />
                          {i?.name}
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>
              <button
                type={'submit'}
                className={
                  'border py-2 bg-blue-tw text-white  hover:bg-blue-tw1 hover:text-white w-[200px] mt-4 m-auto'
                }
              >
                Đăng ký
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div
        className={
          'col-span-5 bg-banner-register bg-center bg-cover bg-no-repeat relative before:absolute before:top-0 before:w-full before:h-full before:bg-blue-tw1 before:opacity-30'
        }
      ></div>
    </div>
  );
};

export default page;
