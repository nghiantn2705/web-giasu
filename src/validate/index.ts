import * as Yup from 'yup';
const regex = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
const SignupSchemaTeacher = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Tên quá ngắn!')
    .max(50, 'Tên quá dài')
    .required('Trường bắt buộc phải nhập'),
  email: Yup.string()
    .email('Không đúng định dạng của Email')
    .required('Trường bắt buộc phải nhập'),
  password: Yup.string()
    .required('Trường bắt buộc phải nhập')
    .min(8, 'Mật khẩu quá ngắn - Mật khẩu cần 8 kí tự trở lên.'),
  avatar: Yup.mixed().required('Bắt buộc phải có ảnh đại diện'),
  phone: Yup.string()
    .required('bắt buộc')
    .matches(regex, 'Số điện thoại không hợp lệ'),
  address: Yup.string().required('Trường bắt buộc phải nhập'),
  citizen_card: Yup.number().required('Trường bắt buộc phải nhập').min(8),
  education_level: Yup.string().required('Trường bắt buộc phải nhập'),
  Certificate: Yup.string().required('Trường bắt buộc phải nhập'),
  description: Yup.string()
    .min(2, 'quá ngắn!')
    .max(1000, 'quá dài')
    .required('Trường bắt buộc phải nhập'),
});
const SignupSchemaUser = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Tên quá ngắn!')
    .max(50, 'Tên quá dài')
    .required('Trường bắt buộc phải nhập'),
  email: Yup.string()
    .email('Không đúng định dạng của Email')
    .required('Trường bắt buộc phải nhập'),
  password: Yup.string()
    .required('Trường bắt buộc phải nhập')
    .min(8, 'Mật khẩu quá ngắn - Mật khẩu cần 8 kí tự trở lên.'),
  avatar: Yup.mixed().required('Bắt buộc phải có ảnh đại diện'),
  phone: Yup.string()
    .required('Trường bắt buộc phải nhập')
    .matches(regex, 'Số điện thoại không hợp lệ'),
  address: Yup.string().required('Trường bắt buộc phải nhập'),
});
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Không đúng định dạng của Email')
    .required('Trường bắt buộc phải nhập'),
  password: Yup.string()
    .required('Trường bắt buộc phải nhập')
    .min(5, 'Mật khẩu quá ngắn - Mật khẩu cần 5 kí tự trở lên.'),
});
export { SignupSchemaTeacher, SignupSchemaUser, LoginSchema };
