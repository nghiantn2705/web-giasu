/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
'use client';
import Image from 'next/image';
import MyDialog from '@/components/Teacher/RentTeacher';
import {
  getTeachesByid,
  getFeedback,
  getStart,
} from '../../../../action/getByID';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { SetStateAction, useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useStore } from '@/hook/use-store';
import { IUser } from '@/types/IUser';
import { ITeachers } from '@/types/ITeachers';
import { ITeachers1 } from '@/types/ITeachers1';
import { postFeedback } from '@/services';
import { number } from 'yup';
import { IFeedback } from '@/types/IFeedback';
import { IStart } from '@/types/IStart';
import Loading from '@/components/Layout/Loading';

export default function Home() {
  const [userInfo] = useStore<ITeachers1>('userInfo');
  const [data, setData] = useState<ITeachers>();
  const [feedbackData, setFeedbackData] = useState<IFeedback[]>();
  const [starData, setStarData] = useState<IStart>();
  const { id: params } = useParams();
  console.log(data);
  useEffect(() => {
    (async () => {
      const res = await getTeachesByid(Number(params));
      const resFeedback = await getFeedback(Number(params));
      const resRating = await getStart(Number(params));
      setData(res);
      setFeedbackData(resFeedback);
      setStarData(resRating);
    })();
  }, []);
  console.log(starData);
  const [point1, setPoint] = useState(0);
  const [description1, setDescription] = useState('');
  const handleRatingChange = (selectedRating: SetStateAction<number>) => {
    setPoint(selectedRating);
  };

  const handleFeedbackChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setDescription(event.target.value);
  };

  const submitFeedback = async (e: any) => {
    e.preventDefault();
    const value = {
      description: description1,
      point: point1,
      idSender: userInfo?.id,
      idTeacher: data?.id,
    };
    await postFeedback({ ...value });
  };
  return (
    <div>
      {data ? (
        <div className={''}>
          <main className={'container mx-auto pt-10  '}>
            <div className={' grid gap-10 grid-cols-12 '}>
              {/* avatar */}
              <div className={' pt-5 col-span-2'}>
                <Image
                  src={`${data?.avatar}`}
                  width={260}
                  height={260}
                  alt={'Picture of the author'}
                />
                <p
                  className={
                    'mt-5 text-center text-green-600 text-2xl font-serif'
                  }
                >
                  Đang sẵn sàng
                </p>
                <p
                  className={
                    'py-5 text-center text-xs text-stone-400 border-b '
                  }
                >
                  NGÀY THAM GIA:
                  <label className={'text-stone-950 font-bold'}>
                    24/1/2021
                  </label>
                </p>
                {/* <div className={'py-4 border-b '}>
                  <div className={'text-xl font-bold'}>
                    <p>Thông tin cá nhân:</p>
                  </div>

                  <div className="">
                    <div className={'pt-2 col-span-3  '}>
                      <label className={'font-bold'}>Số điện thoại : </label>

                      <label>{data?.phone}</label>
                    </div>
                    <div className="pt-2 col-span-3 text-zinc-950 ">
                      <label className="font-bold">Khu vực : </label>

                      <label className=""> {data?.address}</label>
                    </div>
                  </div>
                </div> */}
              </div>
              {/*  */}
              <div className={'pt-5 col-span-8 py-15'}>
                <p className={'text-[30px] font-bold text-stone-800'}>
                  {data?.name}
                </p>
                {/* Nhận Dậy */}
                <div className={' flex flex-row border-b py-3'}>
                  <div className={'basis-1/2'}>
                    <p
                      className={
                        'text-[14px] font-semibold font-poppins text-stone-400 '
                      }
                    >
                      SỐ NGƯỜI ĐÃ THUÊ:
                      <span className={'text-red-400'}>566 người</span>
                    </p>
                  </div>
                  <div className={'basis-1/2'}>
                    <p
                      className={
                        'text-[14px] font-semibold font-poppins text-stone-400 '
                      }
                    >
                      {starData?.avg}
                      <span className={'text-red-400'}>100%</span>
                    </p>
                  </div>
                </div>
                {/*  */}
                {/* Thông tin */}
                <div className="py-4 border-b">
                  <div className={' grid gap-2 grid-cols-2'}>
                    <div>
                      <p className="text-xl font-bold">Nhận dạy:</p>
                      <div className=" grid gap-2 grid-cols-8 py-3">
                        <div className="col-span-2 text-shadow text-white font-semibold text-xs bg-opacity-75 bg-black p-3 text-uppercase rounded-md text-center">
                          <p>{data?.class_id}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-xl font-bold">Dạy môn:</p>
                      <div className=" grid gap-2 grid-cols-8 py-3">
                        <div className="col-span-2 text-shadow text-white font-semibold text-xs bg-opacity-75 bg-black p-3 text-uppercase rounded-md text-center">
                          <p>{data?.subject?.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={'py-4 border-b'}>
                  <div className={'text-xl font-bold'}>
                    <p>Thông tin cá nhân:</p>
                  </div>
                  <div className={'pt-2 grid gap-30 grid-cols-10'}>
                    <div className={'col-span-5'}>
                      <div className={'pt-2 text-zinc-950 '}>
                        <label className={'font-bold'}>Số điện thoại : </label>

                        <label>{data?.phone}</label>
                      </div>
                    </div>
                    <div className={'col-span-5'}>
                      <div className="pt-2  text-zinc-950 ">
                        <label className="font-bold">Khu vực : </label>

                        <label className=""> {data?.address}</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={'py-4 border-b'}>
                  <div className={'text-xl font-bold'}>
                    <p>Thông tin chi tiết:</p>
                  </div>

                  <div className={'pt-2 grid gap-30 grid-cols-10'}>
                    <div className={'col-span-5'}>
                      <div className={'pt-2 text-zinc-950 '}>
                        <label className={'font-bold'}> Năm tốt nghiệp :</label>
                        <label> 2023</label>
                      </div>
                      <div className="pt-2 text-zinc-950 ">
                        <label className="font-bold"> Trình độ học vấn: </label>{' '}
                        <label className="">{data?.education_level}</label>{' '}
                      </div>
                      <div className={'pt-2 text-zinc-950 '}>
                        <label className={'font-bold'}> Trường học :</label>

                        <label className=""> {data?.school_id}</label>
                      </div>
                      <div className={'pt-2  text-zinc-950 '}>
                        <label className={'font-bold'}> Chuyên ngành :</label>

                        <label className=""> ngôn ngữ anh</label>
                      </div>
                    </div>
                    <div className={'col-span-5'}>
                      <div className="pt-2  text-zinc-950 ">
                        <label className="font-bold">Khu vực dạy : </label>

                        <label className=""> {data?.DistrictID}</label>
                      </div>
                      <div className="pt-2  text-zinc-950 ">
                        <label className="font-bold"> Thời gian dạy: </label>

                        <label className=""> {data?.time_tutor_id}</label>
                      </div>
                      <div className={'pt-2  text-zinc-950 '}>
                        <label className={'font-bold'}>
                          Mức lương mong muốn :
                        </label>

                        <label className=""> {data?.salary_id}</label>
                      </div>
                      <div className="pt-2 col-span-3 text-zinc-950 ">
                        <label className="font-bold"> Kinh nghiệm : </label>

                        <label className=""> {data?.description}</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={'py-4 border-b'}>
                  <div className={'text-xl font-bold'}>
                    <p>Thông tin khác:</p>
                  </div>

                  <div className={'pt-2'}>
                    <div className={'pt-1 col-span-3 text-zinc-950 '}>
                      <label className={'font-bold'}>
                        Ghi chú của gia sư :
                      </label>

                      <label className=""> {data?.description}</label>
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
              <div className={'mt-5 col-span-2'}>
                <MyDialog id={data?.id} />
              </div>
            </div>
            <div
              className={'w-[850px] border border-gray-300 p-8 mx-auto pt-10'}
            >
              <div className={'text-center text-2xl font-bold'}>
                <p>Đánh giá :</p>
              </div>
              <div className={' mx-auto  grid gap-5 grid-cols-2'}>
                <div className={'pt-2 col-span-2 text-right'}>
                  <form className={'text-right'} onSubmit={submitFeedback}>
                    <div className={'grid gap-10 grid-cols-10'}>
                      <div className={'col-span-5'}>
                        <img
                          src={userInfo?.avatar}
                          width={45}
                          height={45}
                          className="rounded-full shadow drop-shadow-2xl border border-black hover:bg-gray-200 cursor-pointer"
                          alt=""
                        />
                      </div>

                      <div className={'col-span-5 text-right'}>
                        <label htmlFor="rating">Đánh giá sao:</label>
                        <div>
                          {[1, 2, 3, 4, 5].map((star) => (
                            <FontAwesomeIcon
                              key={star}
                              icon={faStar}
                              className={`text-${
                                point1 >= star ? 'amber-300' : 'gray-500'
                              } cursor-pointer`}
                              onClick={() => {
                                handleRatingChange(star);
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <br />

                    <textarea
                      className={'w-full border border-gray-300 rounded p-2'}
                      id="feedback"
                      value={description1}
                      onChange={handleFeedbackChange}
                      placeholder="Nhập ý kiến phản hồi..."
                    />
                    <br />

                    <button
                      className={'text-right text-white bg-red-400 rounded p-2'}
                      type={'submit'}
                    >
                      Gửi ý kiến
                    </button>
                  </form>
                </div>

                <div className={'col-span-2 text-left'}>
                  <div className={'text-left  pt-2'}>
                    {feedbackData?.map((item: IFeedback) => (
                      <div key={item?.idTeacher}>
                        <div className={' pt-3 grid gap-10 grid-cols-10'}>
                          <label
                            className={
                              'text-base text-red-400 font-bold col-span-5'
                            }
                          >
                            {item?.idSender}
                          </label>
                          <div className={'col-span-5 text-right'}>
                            {[1, 2, 3, 4, 5].map((star) => (
                              <FontAwesomeIcon
                                key={star}
                                icon={faStar}
                                className={`text ${
                                  star <= parseInt(item?.point)
                                    ? 'text-amber-300'
                                    : 'gray-200'
                                } cursor-pointer`}
                              />
                            ))}
                          </div>
                        </div>
                        <div className={' py-3'}>
                          <label className={'font-bold '}>Nội dung :</label>
                          <label className={'text-base py-10'}>
                            {item?.description}
                          </label>
                        </div>
                        <hr />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
