/* eslint-disable no-unused-vars */
import React, { FunctionComponent, useEffect, useState } from 'react';
import { IUserInfo } from '@/types/IUserInfo';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { updateProfile } from '@/services/put';
import {
  getAdreess,
  getAdreessId,
  getClass,
  getSalary,
  getSchool,
  getSubject,
  getTimeSlot,
} from '@/services/get';
import { IAddress, IDistrict } from '@/types/ILocation';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, Upload, RadioChangeEvent, Select } from 'antd';
import { FieldType } from '@/types/Field';
import FormLoginProcedure from '../../ModailProcedure/FormLoginProcedure';
import moment from 'moment';
import { ISubject } from '@/types/ISubject';
import { ITimeSlot } from '@/types/ITimeSlot';
import { IClass } from '@/types/IClass';
import { ISalary } from '@/types/ISalary';
import { ISchool } from '@/types/ISchool';
import MyModalTransition from '@/components/Headless/ModalTransition';
interface IProps {
  editProfile: IUserInfo;
}
const EditProfileTeacher = ({ editProfile }: IProps) => {
  let timeoutId: any;
  const [address, setAddress] = useState<IAddress>();
  const [value, setValue] = useState('');
  const [district, setDistrict] = useState<IDistrict>();
  const [fileList, setFileList] = useState([]);
  const router = useRouter();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [subject, setSubject] = useState<ISubject[]>();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string[]>([]);
  const [timeslot, setTimeSlot] = useState<ITimeSlot[]>();
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);
  const [classlevels, setClasslevels] = useState<IClass[]>();
  const [salary, setSalary] = useState<ISalary[]>();
  const [district1, setDistrict1] = useState<IDistrict>();
  const [address1, setAddress1] = useState<IAddress>();
  const [school, setSchool] = useState<ISchool[]>();
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  useEffect(() => {
    (async () => {
      try {
        const resSubject = await getSubject();
        const resClasses = await getClass();
        const resSalary = await getSalary();
        const resTimeSlote = await getTimeSlot();
        const resSchool = await getSchool();
        setSubject(resSubject);
        setClasslevels(resClasses);
        setSalary(resSalary);
        setTimeSlot(resTimeSlote);
        setSchool(resSchool);
      } catch (ex: any) {
        console.log(ex.message);
      }
    })();
  }, []);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
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
  const filterOption = (
    input: string,
    option?: { label: string; value: string },
  ) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const onSearchAddress = (value: any) => {
    console.log(value);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(async () => {
      const res = await getAdreess(value);
      setAddress(res);
    }, 1000);
  };
  const onChangeGender = (e: RadioChangeEvent) => {
    setValue(e.target.value);
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
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const dummyRequest = ({ onSuccess }: any) => {
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
  };
  const onChangeDistrict = async (value: any) => {
    const res = await getAdreessId(value);
    setDistrict1(res);
  };
  const filteredOptions = subject?.map((o) => ({
    label: o.name,
    value: o.id,
    key: o.id,
  }));
  const filteredTimeSlot = timeslot?.map((o) => ({
    label: o.name,
    value: o.id,
    key: o.id,
  }));
  const filteredClasses = classlevels?.map((o) => ({
    label: o.class,
    value: o.id,
    key: o.id,
  }));
  const filteredSalary = salary?.map((o) => ({
    label: o.name,
    value: o.id,
    key: o.id,
  }));
  const filteredSchool = school?.map((o) => ({
    label: o.name,
    value: o.id,
    key: o.id,
  }));
  const onFinish = async (values: any) => {
    values['date_of_birth'] = moment(values.date_of_birth).format('YYYY-MM-DD');

    // const fileavata = values?.avatar?.map((item: any) => {
    //   return item?.originFileObj;
    // });
    const formData = new FormData();
    const fileavata = values?.avatar?.map((item: any) => {
      return item;
    });

    for (let i = 0; i < fileavata.length; i++) {
      formData.append('avatar', fileavata[i]);
    }
    const address: any = district?.result?.name;
    const address1: any = district1?.result?.formatted_address;
    const latitude: any = district1?.result?.geometry?.location?.lat;
    const longitude: any = district1?.result?.geometry?.location?.lng;
    const id: any = editProfile.id;
    const userData = {
      name: values.name,
      address: address,
      latitude: latitude,
      longitude: longitude,
      email: values.email,
      phone: values.phone,
      education_level: values.education_level,
      subject: values.subject,
      class_id: values.class_id,
      salary_id: values.salary_id,
      DistrictID: values.address1,
      school_id: values.school_id,
      exp: values.exp,
      description: values.description,
      role: 'teacher',
      avatar: fileavata.map(
        (item: { originFileObj: any }) => item.originFileObj,
      ),
    };
    // for (const key in userData) {
    //   formData.append(key, userData[key]);
    // }
    console.log(userData);
    if (address === undefined) {
      toast.error('Vui lòng nhập lại địa chỉ !', {
        position: 'top-right',
        duration: 3000,
      });
    } else {
      await updateProfile(id, userData);
      toast.success('Sửa thành công !', {
        duration: 3000,
        position: 'top-right',
        icon: '✅',
        iconTheme: {
          primary: '#000',
          secondary: '#fff',
        },
      });
      router.push('/profile');
    }
  };

  return (
    <>
      {editProfile ? (
        <div>
          <button
            onClick={openModal}
            className={' mx-auto text-right hover:text-blue-tw text-sm '}
          >
            Xem thêm
          </button>
          <MyModalTransition visible={isOpen} onClose={closeModal}>
            <div className={'px-8 py-4 h-full'}>
              <h3 className={'text-lg font-bold mb-4'}>
                Chỉnh sửa thông tin người dùng
              </h3>
              <Form
                layout="vertical"
                className={'w-full'}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                encType={'multipart/form-data'}
                initialValues={{
                  file: null,
                  name: editProfile.name,
                  email: editProfile.email,
                  phone: editProfile.phone,
                  address: editProfile.address,
                  school: editProfile.school,
                  description: editProfile.description,
                }}
              >
                <div className={'grid grid-cols-2 gap-4'}>
                  <Form.Item<FieldType>
                    name="name"
                    rules={[{ required: true, message: 'Họ và tên!' }]}
                    className={'w-full'}
                  >
                    <Input
                      className={'w-full'}
                      placeholder="Họ và Tên"
                      value={editProfile.name}
                    />
                  </Form.Item>
                  <Form.Item<FieldType>
                    name="phone"
                    rules={[{ required: true, message: 'Hãy số điện thoại!' }]}
                    className={'w-full'}
                  >
                    <Input
                      className={'w-full'}
                      pattern="^[0-9]*$"
                      maxLength={10}
                      placeholder="Số điện thoại"
                      value={editProfile.phone}
                    />
                  </Form.Item>

                  <Form.Item<FieldType>
                    name="email"
                    rules={[
                      { required: true, message: 'Hãy điền email của bạn!' },
                    ]}
                    className={'w-full'}
                  >
                    <Input
                      className={'w-full'}
                      placeholder="Email"
                      value={editProfile.email}
                    />
                  </Form.Item>

                  <Form.Item<FieldType>
                    name="address"
                    rules={[
                      { required: true, message: 'Hãy điền nơi ở của bạn!' },
                    ]}
                    className={'w-full'}
                  >
                    <Select
                      value={editProfile.address}
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
                      customRequest={(info) => {
                        setFileList([info?.file]);
                      }}
                      showUploadList={true}
                    >
                      <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                  </Form.Item>
                  <Form.Item<FieldType>
                    name="education_level"
                    rules={[
                      {
                        required: true,
                        message: 'Hãy điền vị trí công việc hiện tại của bạn!',
                      },
                    ]}
                    className={'w-full'}
                  >
                    <Select
                      showSearch
                      placeholder="Nhập trình độ học vấn"
                      optionFilterProp="children"
                      filterOption={filterOption}
                      defaultValue={editProfile.education_level}
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
                    rules={[
                      { required: true, message: 'Hãy chọn môn học bạn dạy!' },
                    ]}
                  >
                    <Select
                      defaultValue={editProfile?.subject}
                      mode="multiple"
                      placeholder="Môn học"
                      value={selectedItems}
                      onChange={setSelectedItems}
                      style={{ width: '100%' }}
                      options={filteredOptions}
                    />
                  </Form.Item>
                  <Form.Item<FieldType>
                    name="class_id"
                    rules={[
                      { required: true, message: 'Hãy chọn lớp học bạn dạy!' },
                    ]}
                  >
                    <Select
                      defaultValue={editProfile?.class}
                      mode="multiple"
                      placeholder="Lớp học"
                      value={selectedClasses}
                      onChange={setSelectedClasses}
                      style={{ width: '100%' }}
                      options={filteredClasses}
                    />
                  </Form.Item>
                  <Form.Item<FieldType>
                    name="salary_id"
                    rules={[
                      {
                        required: true,
                        message: 'Hãy nhập mức lương của bạn!',
                      },
                    ]}
                    className={'w-full'}
                  >
                    <Select
                      defaultValue={editProfile.salary}
                      showSearch
                      placeholder="Mức lương của bạn"
                      optionFilterProp="children"
                      options={filteredSalary}
                    />
                  </Form.Item>
                  <Form.Item<FieldType>
                    name="DistrictID"
                    rules={[
                      { required: true, message: 'Hãy điền nơi ở của bạn!' },
                    ]}
                    className={'w-full'}
                  >
                    <Select
                      defaultValue={editProfile.District}
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
                    rules={[
                      { required: true, message: 'Hãy chọn trường đại học!' },
                    ]}
                  >
                    <Select
                      defaultValue={editProfile.school}
                      showSearch
                      placeholder="Trường đang và đã học"
                      optionFilterProp="children"
                      options={filteredSchool}
                    />
                  </Form.Item>
                  <Form.Item<FieldType>
                    name="exp"
                    rules={[
                      {
                        required: true,
                        message: 'Hãy nhập kinh nghiệm của bạn!',
                      },
                    ]}
                    className={'w-full'}
                  >
                    <Input
                      className={'w-full'}
                      placeholder="Kinh nghiệm"
                      value={editProfile.exp}
                    />
                  </Form.Item>
                  <Form.Item<FieldType>
                    name="description"
                    rules={[
                      { required: true, message: 'Hãy điền mô tả về bạn!' },
                    ]}
                    className={'w-full'}
                  >
                    <Input
                      className={'w-full'}
                      placeholder="Mô tả về bạn"
                      value={editProfile.description}
                    />
                  </Form.Item>
                </div>
                <Form.Item wrapperCol={{ offset: 11, span: 18 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className={'bg-blue-tw'}
                  >
                    Đăng kí
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </MyModalTransition>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default EditProfileTeacher;
