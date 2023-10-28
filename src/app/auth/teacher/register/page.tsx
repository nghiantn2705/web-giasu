/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import {
  getSubject,
  getClass,
  getDistrict,
  getSalary,
  getTimeSlot,
  getSchool,
} from '../../../../../action/get';
import toast from 'react-hot-toast';
import { ISubject } from '@/types/ISubject';
import { IDisctrict } from '@/types/IDistrict';
import { IClass } from '@/types/IClass';
import { RegisterUser } from '@/services';
import { useRouter } from 'next/navigation';
import { Field, Form, Formik } from 'formik';
import { ISalary } from '@/types/ISalary';
import { ITimeSlot } from '@/types/ITimeSlot';
import { ISchool } from '@/types/ISchool';
const page = () => {
  const router = useRouter();
  const [classes, setClasses] = useState<IClass>();
  const [subject, setSubject] = useState<ISubject>();
  const [district, setDistrict] = useState<IDisctrict>();
  const [salary, setSalary] = useState<ISalary>();
  const [timeslot, setTimeSlot] = useState<ITimeSlot>();
  const [school, setSchool] = useState<ISchool>();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetch = async () => {
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
    };
    fetch();
  }, [setSubject, setClasses, setDistrict]);
  return (
    <div className={'container mx-auto py-5 shadow-lg'}>
      <h1 className={'text-3xl font-bold'}>Hoàn thành đơn đăng kí của bạn</h1>
      <div className="">
        <div className="h-px bg-slate-400 mt-4 "></div>
        <div className="mt-10">
          <Formik
            initialValues={{ role: 3 }}
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
                  router.push('/auth/user');
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
                <label htmlFor="password" className={'w-32 mr-32'}>
                  Mật Khẩu:
                </label>
                <Field
                  type={'password'}
                  name={'password'}
                  placeholder={'Mat Khau'}
                  className={
                    'w-[900px] px-4 py-2 text-lg  border border-black rounded-xl'
                  }
                />
              </div>
              <div className="flex">
                <label htmlFor="email" className={'w-32 mr-32'}>
                  Ảnh đại diện
                </label>
                <Field
                  type={'text'}
                  name={'avatar'}
                  placeholder={'Ảnh đại diện'}
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
                <label htmlFor="date_of_birth" className={'w-32 mr-32'}>
                  Ngày sinh:
                </label>
                <Field
                  type={'date'}
                  name={'date_of_birth'}
                  placeholder={'Ngày sinh'}
                  className={
                    'w-[900px] px-4 py-2 text-lg  border border-black rounded-xl'
                  }
                />
              </div>
              <div className="flex">
                <label htmlFor="phone" className={'w-32 mr-32'}>
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
                <label htmlFor="address" className={'w-36 mr-28'}>
                  Địa chỉ thường chú:
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
                <label htmlFor="citizen_card" className={'w-36 mr-28'}>
                  Số căn cước công dân:
                </label>
                <Field
                  type={'text'}
                  name={'citizen_card'}
                  placeholder={'Căn cước công dân'}
                  className={
                    'w-[900px] px-4 py-2 text-lg border border-black rounded-xl'
                  }
                />
              </div>
              <div className="flex">
                <label htmlFor="education_level" className={'w-32 mr-32'}>
                  Trường/ Trình độ:
                </label>
                <Field
                  type={'text'}
                  name={'education_level'}
                  placeholder={'Bằng cấp học tập'}
                  className={
                    'w-[900px] px-4 py-2 text-lg border border-black rounded-xl'
                  }
                />
              </div>
              <div className="flex">
                <label htmlFor="Certificate" className={'w-32 mr-32'}>
                  Giấy chứng nhận:
                </label>
                <Field
                  type={'text'}
                  name={'Certificate'}
                  placeholder={'Bằng cấp học tập'}
                  className={
                    'w-[900px] px-4 py-2 text-lg border border-black rounded-xl'
                  }
                />
              </div>
              <div className="flex">
                <label htmlFor="school_id" className={'w-32 mr-32'}>
                  Đại Học:
                </label>
                <Field
                  name={'school_id'}
                  as={'select'}
                  className={
                    'w-[900px] px-4 py-2 text-lg border border-black rounded-xl'
                  }
                >
                  {school?.map((items: ISchool) => {
                    return (
                      <option key={items.id} value={`${items?.id}`}>
                        {items?.name}
                      </option>
                    );
                  })}
                </Field>
              </div>
              <div className="flex">
                <label htmlFor="class_id" className={'w-32 mr-32'}>
                  Lớp:
                </label>
                <div className={'flex space-x-4'}>
                  {classes?.map((i: IClass) => {
                    return (
                      <label key={i?.id}>
                        <Field
                          type={'checkbox'}
                          name={'class_id'}
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
              <div className="flex">
                <label htmlFor="districtID" className={'w-32 mr-32'}>
                  Khu Vực dạy
                </label>
                <Field
                  name={'districtID'}
                  as={'select'}
                  className={
                    'w-[900px] px-4 py-2 text-lg border border-black rounded-xl'
                  }
                >
                  {district?.map((items: IDisctrict) => {
                    return (
                      <option key={items.id} value={`${items?.id}`}>
                        {items?.name}
                      </option>
                    );
                  })}
                </Field>
              </div>
              <div className="flex">
                <label htmlFor="salary_id" className={'w-32 mr-32'}>
                  Lương
                </label>
                <Field
                  name={'salary_id'}
                  as={'select'}
                  className={
                    'w-[900px] px-4 py-2 text-lg border border-black rounded-xl'
                  }
                >
                  {salary?.map((items: ISalary) => {
                    return (
                      <option key={items.id} value={`${items?.id}`}>
                        {items?.name}
                      </option>
                    );
                  })}
                </Field>
              </div>
              <div className="flex">
                <label htmlFor="time_tutor_id" className={'w-32 mr-32'}>
                  Ca dạy
                </label>
                <div className={'flex space-x-4'}>
                  {timeslot?.map((i: ITimeSlot) => {
                    return (
                      <label key={i?.id}>
                        <Field
                          type={'checkbox'}
                          name={'time_tutor_id'}
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
                <label htmlFor="description" className={'w-32 mr-32'}>
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
