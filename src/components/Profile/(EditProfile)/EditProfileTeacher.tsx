/* eslint-disable no-unused-vars */
import React, { FunctionComponent, useEffect, useState } from 'react';
import { IUserInfo } from '@/types/IUserInfo';
import { toast } from 'react-toastify';
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
import {
  Button,
  Form,
  Input,
  Upload,
  RadioChangeEvent,
  Select,
  Radio,
  DatePicker,
  Slider,
} from 'antd';
import { FieldType } from '@/types/Field';
import FormLoginProcedure from '../../ModailProcedure/FormLoginProcedure';
import moment from 'moment';
import { ISubject } from '@/types/ISubject';
import { ITimeSlot } from '@/types/ITimeSlot';
import { IClass } from '@/types/IClass';
import { ISalary } from '@/types/ISalary';
import { ISchool } from '@/types/ISchool';
import MyModalTransition from '@/components/Headless/ModalTransition';
import dayjs from 'dayjs';
import { log } from 'console';

interface IProps {
  editProfile: IUserInfo;
}
const EditProfileTeacher = ({ editProfile }: IProps) => {
  console.log(editProfile);
  const [isOpen, setIsOpen] = useState(false);
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
  const formatter = (value: any) => `${(value * 10000).toLocaleString()} đồng`;
  // const handleFileChange = ({ fileList }) => {
  //   setFileList(fileList);
  // };
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

  const onChange2 = (value: any) => {
    const scaledValue = value.map((v: number) => v * 10000);
    setSalary(scaledValue);
  };
  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  const reloadPageAfterDelay = () => {
    setTimeout(() => {
      window.location.reload();
    }, 3000);
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
    values['date_of_birth'] = dayjs(values.date_of_birth).format('YYYY-MM-DD');

    const fileavata = values?.avatar?.map((item: any) => {
      return item?.originFileObj;
    });
    const formData = new FormData();
    const file = values?.certificate?.map((item: any) => {
      return item?.originFileObj;
    });
    if (Array.isArray(fileavata) && fileavata.length > 0) {
      for (let i = 0; i < fileavata.length; i++) {
        formData.append('avatar', fileavata[i]);
      }
    }
    if (Array.isArray(file) && file.length > 0) {
      for (let i = 0; i < file.length; i++) {
        formData.append('Certificate[]', file[i]);
      }
    }

    const address: any = district?.result?.formatted_address;
    const address1: any = district1?.result?.formatted_address;
    const latitude: any = district1?.result?.geometry?.location?.lat;
    const longitude: any = district1?.result?.geometry?.location?.lng;
    const currentAddress = editProfile.address;
    const currentDistrict = editProfile.District;
    const currentLatitude = editProfile.latitude;
    const currentLongitude = editProfile.longitude;
    const id: any = editProfile.id;

    if (address1 == undefined) {
      formData.append('DistrictID', currentDistrict);
      formData.append('latitude', currentLatitude);
      formData.append('longitude', currentLongitude);
    } else {
      formData.append('DistrictID', address1);
      formData.append('latitude', latitude);
      formData.append('longitude', longitude);
    }
    if (address == undefined) {
      formData.append('address', currentAddress);
    } else {
      formData.append('address', address);
    }
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('date_of_birth', values.date_of_birth);
    formData.append('subject', values.subject);
    formData.append('class_id', values.class_id);
    formData.append(
      'salary_id',
      values.salary_id.map((salary: number) => salary * 10000),
    );
    formData.append('school_id', values.school_id);
    formData.append('exp', values.exp);
    formData.append('description', values.description);
    formData.append('gender', values.gender);
    formData.append('phone', values.phone);
    formData.append('education_level', values.education_level);
    formData.append('current_role', values.current_role);
    formData.append('role', '3');
    console.log(values);
    console.log(formData);
    await updateProfile(id, formData);
    toast.success('Cập nhập thành công !', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    reloadPageAfterDelay();
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
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
            <div className={'px-8 py-4 h-full overflow-auto'}>
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
                  exp: editProfile?.exp,
                  file: null,
                  name: editProfile?.name,
                  email: editProfile?.email,
                  phone: editProfile?.phone,
                  address: editProfile?.address,
                  DistrictID: editProfile?.District,
                  school_id: editProfile?.school?.map((school) => school.id),
                  description: editProfile?.description,
                  gender: editProfile?.gender,
                  subject: editProfile?.subject?.map((subject) => subject.id),
                  class_id: editProfile?.class?.map(
                    (classItem) => classItem.id,
                  ),
                  education_level: editProfile?.education_level,
                  salary_id: editProfile?.salary?.map(
                    (salary) => parseInt(salary) / 10000,
                  ),
                  date_of_birth: moment(editProfile?.date_of_birth),
                  current_role: editProfile?.current_role,
                }}
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
                    rules={[
                      { required: true, message: 'Hãy điền email của bạn!' },
                    ]}
                    className={'w-full'}
                  >
                    <Input className={'w-full'} placeholder="Email" />
                  </Form.Item>

                  <Form.Item<FieldType>
                    name="address"
                    label={'Địa chỉ'}
                    rules={[
                      { required: true, message: 'Hãy điền nơi ở của bạn!' },
                    ]}
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
                      {
                        required: true,
                        message: 'Hãy chọn giới tính của bạn!',
                      },
                    ]}
                  >
                    <Radio.Group onChange={onChangeGender}>
                      <Radio value={'1'}>Nam</Radio>
                      <Radio value={'0'}>Nữ</Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item<FieldType>
                    name="date_of_birth"
                    label={'Ngày/Tháng/Năm sinh'}
                    rules={[
                      {
                        required: true,
                        message: 'Hãy nhập ngày sinh của bạn!',
                      },
                    ]}
                  >
                    <DatePicker
                      format="DD-MM-YYYY"
                      className={'w-full'}
                      value={dayjs(editProfile.date_of_birth, 'YYYY-MM-DD')}
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
                      fileList={
                        editProfile.avatar
                          ? [
                              {
                                uid: '-1',
                                name: 'Image',
                                status: 'done',
                                url: editProfile.avatar,
                              },
                            ]
                          : []
                      }
                      maxCount={1}
                      // disabled
                      beforeUpload={(file) => {
                        return new Promise((resolve, rejects) => {
                          if (file.size > 900000) {
                            rejects('Ảnh quá dung lượng');
                          } else {
                            resolve('Thành công');
                          }
                        });
                      }}
                      showUploadList={false}
                    >
                      <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                  </Form.Item>
                  {/* <Form.Item
                    label="Chứng chỉ"
                    name="certificate"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                  >
                    <Upload
                      customRequest={dummyRequest}
                      listType="picture"
                      maxCount={4}
                      fileList={fileList}
                      multiple
                    >
                      {fileList.length === 4 ? (
                        ''
                      ) : (
                        <Button icon={<UploadOutlined />}>
                          Click to Upload
                        </Button>
                      )}
                    </Upload>
                  </Form.Item> */}
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
                      {
                        required: true,
                        message: 'Hãy chọn Môn giảng dạy bạn dạy!',
                      },
                    ]}
                  >
                    <Select
                      mode="multiple"
                      placeholder="Môn giảng dạy"
                      onChange={setSelectedItems}
                      style={{ width: '100%' }}
                      options={filteredOptions}
                    />
                  </Form.Item>
                  {/* <Form.Item<FieldType>
                  name="time_tutor_id"
                  rules={[
                    { required: true, message: 'Hãy chọn Môn giảng dạy bạn dạy!' },
                  ]}
                >
                  <Select
                      defaultValue={editProfile?.subject}
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
                      {
                        required: true,
                        message: 'Hãy chọn Lớp giảng dạy bạn dạy!',
                      },
                    ]}
                  >
                    <Select
                      mode="multiple"
                      placeholder="Lớp giảng dạy"
                      value={editProfile?.subject?.map((item) => {
                        item.id;
                      })}
                      onChange={setSelectedClasses}
                      style={{ width: '100%' }}
                      options={filteredClasses}
                    />
                  </Form.Item>

                  <Form.Item<FieldType>
                    name="current_role"
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
                      defaultValue={editProfile?.current_role}
                      showSearch
                      placeholder="Hiện tại đang là"
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
                      {
                        required: true,
                        message: 'Hãy nhập mức lương của bạn!',
                      },
                    ]}
                    className={'w-full'}
                  >
                    <Slider
                      range
                      step={5}
                      value={editProfile?.salary?.map((s) => Number(s))}
                      onChange={onChange2}
                      tooltip={{ formatter }}
                    />
                  </Form.Item>

                  <Form.Item<FieldType>
                    name="DistrictID"
                    label={'Khu vực dậy của bạn'}
                    rules={[
                      { required: true, message: 'Hãy điền nơi ở của bạn!' },
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
                    rules={[
                      { required: true, message: 'Hãy chọn trường đại học!' },
                    ]}
                  >
                    <Select
                      showSearch
                      placeholder="Trường đang và đã học"
                      optionFilterProp="children"
                      options={filteredSchool}
                    />
                  </Form.Item>
                  <Form.Item<FieldType>
                    name="exp"
                    label={'Kinh nghiệm của bạn'}
                    rules={[
                      {
                        required: true,
                        message: 'Hãy nhập kinh nghiệm của bạn!',
                      },
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
                    rules={[
                      { required: true, message: 'Hãy điền mô tả về bạn!' },
                    ]}
                    className={'w-full'}
                  >
                    <Input
                      className={'w-full'}
                      placeholder="Mô tả về bạn"
                      value={editProfile?.description}
                    />
                  </Form.Item>
                </div>
                <Form.Item
                  wrapperCol={{ offset: 11, span: 18 }}
                  className={'pb-20'}
                >
                  <Button
                    type="primary"
                    htmlType="submit"
                    className={'bg-blue-tw'}
                  >
                    Cập nhật
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
