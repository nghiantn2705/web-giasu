import React, { useState } from 'react';
import MyModalTransition, {
  ModalTitle,
} from '@/components/Headless/ModalTransition';

import { IUserInfo } from '@/types/IUserInfo';
import { Button, Form, Upload } from 'antd';

import { certificateAdd } from '@/services/post';
import { toast } from 'react-toastify';
import { UploadOutlined } from '@ant-design/icons';

interface IProps {
  infoUser: IUserInfo;
}
const AddCertificate = ({ infoUser }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const [fileList, setFileList] = useState([]);
  const id = infoUser?.id;
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
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

  const onFinish = async (values: any) => {
    try {
      const file = values?.certificate?.map((item: any) => {
        return item?.originFileObj;
      });

      const formData = new FormData();
      for (let i = 0; i < file.length; i++) {
        formData.append('Certificate[]', file[i]);
      }
      formData.append('id', id.toString());
      await certificateAdd(formData);
      toast.success('Thêm ảnh chứng chỉ thành công!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      closeModal();
    } catch (ex: any) {
      toast.success(ex, {
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
    <div>
      <div>
        <button
          onClick={openModal}
          className={
            'font-medium text-blue-6000 border py-2 px-4 rounded-md hover:bg-blue-tw1 hover:text-white'
          }
        >
          Thêm ảnh
        </button>

        <MyModalTransition visible={isOpen} onClose={closeModal}>
          <ModalTitle>Thêm ảnh chứng chỉ</ModalTitle>
          <div className={'px-8 py-4'}>
            <Form
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              encType={'multipart/form-data'}
              className={'w-full flex flex-col gap-4'}
            >
              <Form.Item
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
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  )}
                </Upload>
              </Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={'bg-blue-tw self-end'}
              >
                Thêm ảnh
              </Button>
            </Form>
          </div>
        </MyModalTransition>
      </div>
    </div>
  );
};

export default AddCertificate;
