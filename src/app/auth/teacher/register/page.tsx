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
import { SignupSchemaTeacher } from '@/validate/index';
import toast from 'react-hot-toast';
import { ISubject } from '@/types/ISubject';
// import { IDisctrict } from '@/types/IDistrict';
import { IClass } from '@/types/IClass';
import { RegisterUser } from '@/services';
import { useRouter } from 'next/navigation';
import { Field, Form, Formik } from 'formik';
// import TextField from '@material-ui/core/TextField';
// import { ISalary } from '@/types/ISalary';
// import { ITimeSlot } from '@/types/ITimeSlot';
import { ISchool } from '@/types/ISchool';

const page = () => {
  const router = useRouter();
  const [classes, setClasses] = useState<IClass[]>();
  const [subject, setSubject] = useState<ISubject[]>();
  // const [district, setDistrict] = useState<IDisctrict[]>();
  // const [salary, setSalary] = useState<ISalary>();
  // const [timeslot, setTimeSlot] = useState<ITimeSlot[]>();
  const [school, setSchool] = useState<ISchool[]>();
  console.log(classes);
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
  }, []);
  return (
    <div className={'container mx-auto py-5 shadow-lg'}>
      <h1 className={'text-3xl font-bold'}>Hoàn thành đơn đăng kí của bạn</h1>
      <h1 className="h-px bg-slate-400 mt-4 ">{''}</h1>
      <div className="mt-10">
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
          {({ errors, touched }) => (
            <Form className={'flex flex-col gap-5 w-full m-auto'}>
              <div className="flex">
                <label htmlFor="name" className={'w-28'}>
                  Email Address
                </label>
                <div className={''}>
                  <Field
                    type={'text'}
                    name={'name'}
                    placeholder={'Học và tên'}
                    className={
                      'w-[900px] px-4 py-2 text-lg text-center border border-black rounded-xl'
                    }
                  />
                  {errors.name && touched.name ? (
                    <div className={'text-red-600 mt-2'}>{errors.name}</div>
                  ) : null}
                </div>
              </div>
              <div className={'flex'}>
                <label htmlFor="email" className={''}>
                  Email Address
                </label>
                <div className={''}>
                  <Field
                    type={'email'}
                    name={'email'}
                    placeholder={'Email'}
                    className={
                      'w-[900px] px-4 py-2 text-lg text-center border border-black rounded-xl'
                    }
                  />
                  {errors.email && touched.email ? (
                    <div className={'text-red-600 mt-2'}>{errors.email}</div>
                  ) : null}
                </div>
              </div>
              <Field
                type={'password'}
                name={'password'}
                placeholder={'Mat Khau'}
                className={
                  'w-full px-4 py-2 text-lg text-center border border-black rounded-xl'
                }
              />
              {errors.password && touched.password ? (
                <div className={'text-red-600 mt-2'}>{errors.password}</div>
              ) : null}
              <Field
                as={'file'}
                name={'avatar'}
                placeholder={'Ảnh đại diện'}
                className={
                  'w-full px-4 py-2 text-lg text-center border border-black rounded-xl'
                }
              />
              {errors.avatar && touched.avatar ? (
                <div className={'text-red-600 mt-2'}>{errors.avatar}</div>
              ) : null}
              <Field
                as="select"
                name="gender"
                className={
                  'w-full px-4 py-2 text-lg text-center border border-black rounded-xl'
                }
              >
                <option value="">-- Chọn giới tính --</option>
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
              </Field>
              <Field
                type={'date'}
                name={'date_of_birth'}
                placeholder={'Ngày sinh'}
                className={
                  'w-full px-4 py-2 text-lg text-center border border-black rounded-xl'
                }
              />
              <Field
                type={'text'}
                name={'phone'}
                placeholder={'Số điện thoại'}
                className={
                  'w-full px-4 py-2 text-lg text-center border border-black rounded-xl'
                }
              />
              {errors.phone && touched.phone ? (
                <div className={'text-red-600 mt-2'}>{errors.phone}</div>
              ) : null}
              <Field
                type={'text'}
                name={'address'}
                placeholder={'Nơi bạn đang ở'}
                className={
                  'w-full px-4 py-2 text-lg text-center border border-black rounded-xl'
                }
              />
              {errors.address && touched.address ? (
                <div className={'text-red-600 mt-2'}>{errors.address}</div>
              ) : null}
              <Field
                type={'text'}
                name={'citizen_card'}
                placeholder={'Căn cước công dân'}
                className={
                  'w-full px-4 py-2 text-lg text-center border border-black rounded-xl'
                }
              />
              {errors.citizen_card && touched.citizen_card ? (
                <div className={'text-red-600 mt-2'}>{errors.citizen_card}</div>
              ) : null}
              <Field
                type={'text'}
                name={'education_level'}
                placeholder={'Bằng cấp học tập'}
                className={
                  'w-full px-4 py-2 text-lg text-center border border-black rounded-xl'
                }
              />
              {errors.education_level && touched.education_level ? (
                <div className={'text-red-600 mt-2'}>
                  {errors.education_level}
                </div>
              ) : null}
              <Field
                type={'text'}
                name={'Certificate'}
                placeholder={'Bằng cấp học tập'}
                className={
                  'w-full px-4 py-2 text-lg text-center border border-black rounded-xl'
                }
              />
              {errors.Certificate && touched.Certificate ? (
                <div className={'text-red-600 mt-2'}>{errors.Certificate}</div>
              ) : null}
              <Field
                name={'school_id'}
                as={'select'}
                className={
                  'w-full px-4 py-2 text-lg text-center border border-black rounded-xl'
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
              <Field
                type={'text'}
                name={'description'}
                component={'textarea'}
                rows={'6'}
                placeholder={'Giới thiệu về bạn'}
                className={
                  'w-full px-4 py-2 text-lg text-center border border-black rounded-xl'
                }
              />
              {errors.description && touched.description ? (
                <div className={'text-red-600 mt-2'}>{errors.description}</div>
              ) : null}
              <button
                type={'submit'}
                className={
                  'border py-2 bg-red-400 text-white rounded-xl hover:bg-red-600 hover:text-white w-[200px] mt-4 m-auto'
                }
              >
                Đăng ký
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default page;
