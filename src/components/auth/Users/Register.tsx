// import React from 'react';
// import MyModal, { ModalTitle } from '@/components/Modal';
// import Image from 'next/image';
// import { Field, Form, Formik } from 'formik';
// import Link from 'next/link';

// interface IMyModal {
//   visible: boolean;
//   onClose: () => void;
// }
// const RegisterUser = ({ visible, onClose }: IMyModal) => {
//   return (
//     <div>
//       <MyModal visible={visible} onClose={onClose}>
//         <div className={'w-[400px]'}>
//           <ModalTitle>
//             <div
//               className={'flex flex-col justify-center items-center mt-12 mb-5'}
//             >
//               <Image src={'/logo.png'} alt={''} width={50} height={100} />
//               <h4 className={'mt-1 pb-1 text-xl font-semibold inline-block'}>
//                 Xin chào đến với GS7
//               </h4>
//               <p className="mb-4 text-center">
//                 Vui lòng đăng ký tài khoản của phụ huynh
//               </p>
//             </div>
//           </ModalTitle>
//           <div className={'w-full'}>
//             <Formik
//               initialValues={{ email: '', password: '' }}
//               onSubmit={(values) => console.log(values)}
//             >
//               ` v8={' '}
//               <Form className={'flex flex-col gap-5'}>
//                 <Field
//                   type={'email'}
//                   name={'email'}
//                   placeholder={'Tên đăng nhập hoặc email'}
//                   className={
//                     'w-full px-4 py-2 text-lg text-center border border-black rounded-xl'
//                   }
//                 />
//                 <Field
//                   type={'password'}
//                   name={'password'}
//                   placeholder={'Nhập mật khẩu'}
//                   className={
//                     'w-full px-4 py-2 text-lg text-center border border-black rounded-xl'
//                   }
//                 />
//                 <Field
//                   type={'password'}
//                   name={'password'}
//                   placeholder={'Nhập mật khẩu'}
//                   className={
//                     'w-full px-4 py-2 text-lg text-center border border-black rounded-xl'
//                   }
//                 />
//                 <Field
//                   type={'password'}
//                   name={'password'}
//                   placeholder={'Nhập mật khẩu'}
//                   className={
//                     'w-full px-4 py-2 text-lg text-center border border-black rounded-xl'
//                   }
//                 />
//                 <Link
//                   href={'/'}
//                   className={
//                     'text-right text-sm text-gray-600 hover:text-black'
//                   }
//                 >
//                   Quên mật khẩu?
//                 </Link>
//                 <button
//                   type={'submit'}
//                   className={
//                     'border py-2 bg-red-400 text-white rounded-xl hover:bg-red-600 hover:text-white'
//                   }
//                 >
//                   Đăng nhập
//                 </button>
//               </Form>
//             </Formik>
//             <button
//               type={'button'}
//               className={
//                 'border py-2 bg-red-400 text-white rounded-xl hover:bg-red-600 hover:text-white w-full mt-5'
//               }
//             >
//               Google
//             </button>
//           </div>
//           <p className={'text-sm text-center my-5'}>
//             Chưa có tài khoản? {''}
//             <Link
//               href={'/'}
//               className={
//                 'hover:text-blue-500 decoration-1 hover:underline hover:underline-offset-4'
//               }
//             >
//               Đăng ký
//             </Link>
//           </p>
//         </div>
//       </MyModal>
//     </div>
//   );
// };

// export default RegisterUser;
