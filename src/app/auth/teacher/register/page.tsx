/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import {
  Button,
  Form,
  Input,
  Select,
  Upload,
  Radio,
  RadioChangeEvent,
  DatePicker,
  Checkbox,
  Slider,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
import { ISubject } from '@/types/ISubject';
import { IClass } from '@/types/IClass';
import { RegisterUser } from '@/services';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ITimeSlot } from '@/types/ITimeSlot';
import { ISchool } from '@/types/ISchool';
import {
  getAdreess,
  getAdreessId,
  getClass,
  getSchool,
  getSubject,
  getTimeSlot,
} from '@/services/get';
import moment from 'moment';
import { FieldType } from '@/types/Field';
import { IAddress, IDistrict } from '@/types/ILocation';
import FormLoginProcedure from '@/components/ModailProcedure/FormLoginProcedure';
const page = () => {
  const router = useRouter();
  const [value, setValue] = useState('');
  const [classlevels, setClasslevels] = useState<IClass[]>();
  const [subject, setSubject] = useState<ISubject[]>();
  const [timeslot, setTimeSlot] = useState<ITimeSlot[]>();
  const [school, setSchool] = useState<ISchool[]>();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string[]>([]);
  const [address, setAddress] = useState<IAddress>();
  const [district, setDistrict] = useState<IDistrict>();
  const [district1, setDistrict1] = useState<IDistrict>();
  const [address1, setAddress1] = useState<IAddress>();
  const [salary, setSalary] = useState<any>([]);
  const formatter = (value: any) => `${(value * 10000).toLocaleString()} đồng`;

  let timeoutId: any;
  const filterOption = (
    input: string,
    option?: { label: string; value: string },
  ) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const filteredOptions = subject?.map((o) => ({
    label: o.name,
    value: o.id,
    key: o.id,
  }));

  const filteredClasses = classlevels?.map((o) => ({
    label: o.class,
    value: o.id,
    key: o.id,
  }));

  const filteredSchool = school?.map((o) => ({
    label: o.name,
    value: o.id,
    key: o.id,
  }));

  const filteredTimeSlot = timeslot?.map((o) => ({
    label: o.name,
    value: o.id,
    key: o.id,
  }));

  const onChangeGender = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  const onSearchAddress = (value: any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(async () => {
      const res = await getAdreess(value);
      setAddress(res);
    }, 500);
  };
  const onChangeAddress = async (value: any) => {
    const res = await getAdreessId(value);
    setDistrict(res);
  };
  const onSearchDistrict = (value: any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(async () => {
      const res = await getAdreess(value);
      setAddress1(res);
    }, 500);
  };
  const onChangeDistrict = async (value: any) => {
    const res = await getAdreessId(value);
    setDistrict1(res);
  };

  const onChange = (value: any) => {
    const scaledValue = value.map((v: number) => v * 10000);
    setSalary(scaledValue);
  };

  const options = address?.predictions?.map((item) => {
    return {
      value: item?.place_id,
      label: item?.description,
    };
  });
  const options1 = address1?.predictions?.map((item) => {
    return {
      value: item?.place_id,
      label: item?.description,
    };
  });

  useEffect(() => {
    (async () => {
      try {
        const resSubject = await getSubject();
        const resClasses = await getClass();
        const resTimeSlote = await getTimeSlot();
        const resSchool = await getSchool();
        setSubject(resSubject);
        setClasslevels(resClasses);
        setTimeSlot(resTimeSlote);
        setSchool(resSchool);
      } catch (ex: any) {
        console.log(ex.message);
      }
    })();
  }, []);
  const onFinish = async (values: any) => {
    try {
      values['date_of_birth'] = moment(values.date_of_birth).format(
        'YYYY-MM-DD',
      );

      const formData = new FormData();
      if (values.avatar) {
        const fileavata = values?.avatar?.map((item: any) => {
          return item?.originFileObj;
        });
        console.log(fileavata);
        formData.append('avatar', fileavata[0]);
      } else {
        formData.append('avatar', '');
      }

      const addressTeacher: any =
        district?.result?.formatted_address + '' + district?.result?.name;
      const addressTeacher1: any = district1?.result?.formatted_address;
      const latitude: any = district1?.result?.geometry?.location?.lat;
      const longitude: any = district1?.result?.geometry?.location?.lng;
      formData.append('DistrictID', addressTeacher1);
      formData.append('address', addressTeacher);
      formData.append('latitude', latitude);
      formData.append('longitude', longitude);
      formData.append('class_id', values.class_id);
      formData.append('current_role', values.current_role);
      formData.append('date_of_birth', values.date_of_birth);
      formData.append('description', values.description);
      formData.append('education_level', values.education_level);
      formData.append('email', values.email);
      formData.append('exp', values.exp);
      formData.append('gender', values.gender);
      formData.append('password', values.password);
      formData.append('phone', values.phone);
      formData.append('name', values.name);
      formData.append('salary_id', salary);
      formData.append('school_id', values.school_id);
      formData.append('subject', values.subject);
      // formData.append('time_tutor_id', values.time_tutor_id);
      formData.append('role', '3');

      await RegisterUser(formData);
      toast.success(
        'Đăng kí thành công . vui lòng vào mail để kích hoạt tài khoản !',
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        },
      );
      router.push('/auth/teacher');
    } catch (error) {
      toast.error('Đăng kí thất bại vui lòng thử lại', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };
  return (
    <div className={'container grid grid-cols-12 min-h-fit'}>
      <div className={'col-span-7 pt-5 pb-16  px-20'}>
        <div className={'flex flex-col items-center mb-5'}>
          <Image src={'/logo.png'} alt={''} width={100} height={100} />
          <h1 className={'text-2xl text-blue-tw'}>Chào mừng bạn đến với Gs7</h1>
          <p className={'text-gray-500'}>
            Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý
            tưởng
          </p>
        </div>
        <Form
          layout="vertical"
          className={'w-full'}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          encType={'multipart/form-data'}
        >
          <div className={'grid grid-cols-2 gap-4'}>
            <Form.Item<FieldType>
              name="name"
              label={'Họ và tên'}
              rules={[{ required: true, message: 'Họ và tên!' }]}
              className={'w-full'}
            >
              <Input className={'w-full'} placeholder="Họ và Tên" />
            </Form.Item>
            <Form.Item<FieldType>
              name="phone"
              label={'Số điện thoại'}
              rules={[{ required: true, message: 'Hãy số điện thoại!' }]}
              className={'w-full'}
            >
              <Input
                className={'w-full'}
                pattern="^[0-9]*$"
                maxLength={10}
                placeholder="Số điện thoại"
              />
            </Form.Item>

            <Form.Item<FieldType>
              name="email"
              label={'Email'}
              rules={[{ required: true, message: 'Hãy điền email của bạn!' }]}
              className={'w-full'}
            >
              <Input className={'w-full'} placeholder="Email" />
            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              label={'Mật khẩu'}
              rules={[
                { required: true, message: 'Hãy nhập mật khẩu của bạn!' },
              ]}
            >
              <Input.Password className={'w-full'} placeholder="Mật khẩu" />
            </Form.Item>
            <Form.Item<FieldType>
              name="address"
              label={'Địa chỉ'}
              rules={[{ required: true, message: 'Hãy điền nơi ở của bạn!' }]}
              className={'w-full'}
            >
              <Select
                className={'w-[400px]'}
                showSearch
                placeholder="Nhập địa chỉ ở của bạn"
                optionFilterProp="children"
                onChange={onChangeAddress}
                onSearch={onSearchAddress}
                filterOption={filterOption}
                options={options}
              />
            </Form.Item>
            <Form.Item<FieldType>
              name="gender"
              label={'Giới tính'}
              required
              rules={[
                { required: true, message: 'Hãy chọn giới tính của bạn!' },
              ]}
            >
              <Radio.Group onChange={onChangeGender} value={value}>
                <Radio value={'1'}>Nam</Radio>
                <Radio value={'0'}>Nữ</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item<FieldType>
              name="date_of_birth"
              label={'Ngày/Tháng/Năm sinh'}
              rules={[
                { required: true, message: 'Hãy nhập ngày sinh của bạn!' },
              ]}
            >
              <DatePicker format="DD-MM-YYYY" className={'w-full'} />
            </Form.Item>
            <Form.Item<FieldType>
              label="Ảnh đại diện"
              name="avatar"
              getValueFromEvent={(event) => {
                return event?.fileList;
              }}
              valuePropName="fileList"
            >
              <Upload
                maxCount={1}
                beforeUpload={(file) => {
                  return new Promise((resolve, rejects) => {
                    if (file.size > 900000) {
                      rejects('Ảnh quá dung lượng');
                    } else {
                      resolve('Thành công');
                    }
                  });
                }}
                showUploadList={true}
              >
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </Form.Item>

            <Form.Item<FieldType>
              name="education_level"
              label={'Trình độ học vấn'}
              rules={[
                {
                  required: true,
                  message: 'Hãy điền Trình độ học vấn hiện tại của bạn!',
                },
              ]}
              className={'w-full'}
            >
              <Select
                showSearch
                placeholder="Nhập trình độ học vấn"
                optionFilterProp="children"
                filterOption={filterOption}
                options={[
                  {
                    value: 'Đại học',
                    label: 'Đại học',
                    key: 1,
                  },
                  {
                    value: 'Cao đẳng',
                    label: 'Cao đẳng',
                    key: 2,
                  },
                  {
                    value: 'Trung cấp',
                    label: 'Trung cấp',
                    key: 3,
                  },
                ]}
              />
            </Form.Item>
            <Form.Item<FieldType>
              name="subject"
              label={'Môn giảng dạy'}
              rules={[
                { required: true, message: 'Hãy chọn Môn giảng dạy bạn dạy!' },
              ]}
            >
              <Select
                mode="multiple"
                placeholder="Môn giảng dạy"
                value={selectedItems}
                onChange={setSelectedItems}
                style={{ width: '100%' }}
                options={filteredOptions}
              />
            </Form.Item>
            {/* <Form.Item<FieldType>
              label={'Ca mong muốn dạy'}
              name="time_tutor_id"
              rules={[
                {
                  required: true,
                  message: 'Hãy chọn ca dạy mong muốn của bạn!',
                },
              ]}
            >
              <Select
                mode="multiple"
                placeholder="Ca học"
                value={selectedTimeSlot}
                onChange={setSelectedTimeSlot}
                style={{ width: '100%' }}
                options={filteredTimeSlot}
              />
            </Form.Item> */}
            <Form.Item<FieldType>
              name="class_id"
              label={'Lớp giảng dạy'}
              rules={[
                { required: true, message: 'Hãy chọn Lớp giảng dạy bạn dạy!' },
              ]}
            >
              <Select
                mode="multiple"
                placeholder="Lớp giảng dạy"
                value={selectedClasses}
                onChange={setSelectedClasses}
                style={{ width: '100%' }}
                options={filteredClasses}
              />
            </Form.Item>

            <Form.Item<FieldType>
              name="current_role"
              label={'Vai trò hiện tại'}
              rules={[
                {
                  required: true,
                  message: 'Hãy điền vai trò hiện tại hiện tại của bạn!',
                },
              ]}
              className={'w-full'}
            >
              <Select
                showSearch
                placeholder="Vai trò hiện tại"
                optionFilterProp="children"
                filterOption={filterOption}
                options={[
                  {
                    value: 'Sinh Viên',
                    label: 'Sinh Viên',
                  },
                  {
                    value: 'Giảng Viên',
                    label: 'Giảng Viên',
                  },
                  {
                    value: 'Giáo viên',
                    label: 'Giáo viên',
                  },
                ]}
              />
            </Form.Item>
            <Form.Item<FieldType>
              name="salary_id"
              label={'Mức lương mong muốn'}
              rules={[
                { required: true, message: 'Hãy nhập mức lương của bạn!' },
              ]}
              className={'w-full'}
            >
              <Slider
                range
                step={5}
                defaultValue={[10, 50]}
                onChange={onChange}
                tooltip={{ formatter }}
              />
            </Form.Item>
            <Form.Item<FieldType>
              name="DistrictID"
              label={'Khu vực dậy của bạn'}
              rules={[
                { required: true, message: 'Hãy điền khu vực dạy của bạn!' },
              ]}
              className={'w-full'}
            >
              <Select
                className={'w-[400px]'}
                showSearch
                placeholder="Nhập khu vực dậy của bạn"
                optionFilterProp="children"
                onChange={onChangeDistrict}
                onSearch={onSearchDistrict}
                filterOption={filterOption}
                options={options1}
              />
            </Form.Item>
            <Form.Item<FieldType>
              name="school_id"
              label={'Trường bạn đang học hoặc đã học'}
              rules={[{ required: true, message: 'Hãy chọn trường đại học!' }]}
            >
              <Select
                showSearch
                mode="multiple"
                placeholder="Trường đang và đã học"
                optionFilterProp="children"
                options={filteredSchool}
              />
            </Form.Item>
            <Form.Item<FieldType>
              name="exp"
              label={'Kinh nghiệm của bạn'}
              rules={[
                { required: true, message: 'Hãy nhập kinh nghiệm của bạn!' },
              ]}
              className={'w-full'}
            >
              <Select
                showSearch
                placeholder="Nhập kinh nghiệm của bạn"
                optionFilterProp="children"
                filterOption={filterOption}
                options={[
                  {
                    value: 'Dưới 1 năm',
                    label: 'Dưới 1 năm',
                    key: 1,
                  },
                  {
                    value: 'Từ 1 - 2 năm',
                    label: 'Từ 1 - 2 năm',
                    key: 2,
                  },
                  {
                    value: 'Từ 2 - 4 năm',
                    label: 'Từ 2 - 4 năm',
                    key: 3,
                  },
                  {
                    value: 'Từ 4 - 6 năm',
                    label: 'Từ 4 - 6 năm',
                    key: 4,
                  },
                  {
                    value: 'Từ 6 - 8 năm',
                    label: 'Từ 6 - 8 năm',
                    key: 5,
                  },
                  {
                    value: 'Trên 10 năm',
                    label: 'Trên 10 năm',
                    key: 6,
                  },
                ]}
              />
            </Form.Item>
            <Form.Item<FieldType>
              name="description"
              label={'Giới thiệu về bạn'}
              rules={[{ required: true, message: 'Hãy điền mô tả về bạn!' }]}
              className={'w-full'}
            >
              <Input className={'w-full'} placeholder="Mô tả về bạn" />
            </Form.Item>
          </div>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        'Bạn cần chấp nhận điều khoản để tiếp tục.',
                      ),
              },
            ]}
          >
            <Checkbox>Tôi đồng ý với các điều khoản và điều kiện </Checkbox>
          </Form.Item>
          <div>
            <span>
              {' '}
              <FormLoginProcedure />
            </span>
          </div>{' '}
          <Form.Item wrapperCol={{ offset: 11, span: 18 }}>
            <Button type="primary" htmlType="submit" className={'bg-blue-tw'}>
              Đăng kí
            </Button>
          </Form.Item>
        </Form>
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
