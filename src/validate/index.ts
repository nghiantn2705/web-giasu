import * as Yup from 'yup';

const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

const SignupSchemaTeacher = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Tên quá ngắn!')
    .max(50, 'Tên quá dài')
    .required('Trường bắt buộc phải nhập'),
  email: Yup.string()
    .email('Không đúng định dạng của Email')
    .required('Trường bắt buộc phải nhập')
    .matches(regexEmail, 'Không đúng định dạng email.'),
  password: Yup.string()
    .required('Không có bảo mật')
    .min(8, 'Mật khẩu quá ngắn - Mật khẩu cần 8 kí tự trở lên.'),
  avatar: Yup.mixed().required('Ảnh'),
  gender: Yup.string()
    .required('Bắt buộc phải chon giới tính')
    .label('Chọn giới tính'),
  date_of_birth: Yup.date().required(),
  phone: Yup.string()
    .required('Trường bắt buộc phải nhập')
    .matches(regexPhoneNumber, 'Không được phép để ký tự')
    .min(10, 'Không đúng số điện thoại.'),
  address: Yup.string().required('Bắt buộc'),
  citizen_card: Yup.number().required('Bắt buộc').min(8),
  education_level: Yup.string().required('Bắt buộc'),
  Certificate: Yup.string().required('Bắt buộc'),
  description: Yup.string().required('Bắt buộc'),
});
const SignupSchemaUser = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Tên quá ngắn!')
    .max(50, 'Tên quá dài')
    .required('Trường bắt buộc phải nhập'),
  email: Yup.string()
    .email('Không đúng định dạng của Email')
    .required('Trường bắt buộc phải nhập')
    .matches(regexEmail, 'Không đúng định dạng email.'),
  password: Yup.string()
    .required('Không có bảo mật')
    .min(8, 'Mật khẩu quá ngắn - Mật khẩu cần 8 kí tự trở lên.'),
  avatar: Yup.mixed().required('Bạn cần ảnh đại diện'),
  phone: Yup.string()
    .required('Trường bắt buộc phải nhập')
    .matches(regexPhoneNumber, 'Không được phép để ký tự'),
});
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Không đúng định dạng của Email')
    .required('Trường bắt buộc phải nhập')
    .matches(regexEmail, 'Không đúng định dạng email.'),
  password: Yup.string()
    .required('Không có bảo mật')
    .min(5, 'Mật khẩu quá ngắn - Mật khẩu cần 5 kí tự trở lên.'),
});
export { SignupSchemaTeacher, SignupSchemaUser, LoginSchema };
