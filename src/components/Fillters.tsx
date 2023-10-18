'use client';

import React, { useEffect, useState } from 'react';
import { LuListFilter } from 'react-icons/lu';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { GrFormPrevious } from 'react-icons/gr';
import { MdNavigateNext } from 'react-icons/md';
import { getDistrict, getTeachers, getTimeslot } from '../../action/get';
import { getTeachesDistrict } from '../../action/getByID';
import Teacher from '@/components/Teacher/Teacher';
import Loading from '@/components/Loading';
import classNames from 'classnames';

const Fillters = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const [option, setOption] = useState([]);
  const [timeslot, setTimeslot] = useState([]);
  const [district, setDistrict] = useState([]);
  const [teacher, setTeacher] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getDistrict();
      const timeslot = await getTimeslot();
      const teacher = await getTeachers();
      setOption(res);
      setDistrict(res);
      setTimeslot(timeslot);
      setTeacher(teacher);
    };
    fetchData();
  }, [setOption]);
  const handlerChange = (e: any) => {
    const renderText = e.target.value || 'location';
    if (renderText == 'location') {
      const show: any = district;
      setOption(show);
    }
    if (renderText == 'timeslot') {
      const show: any = timeslot;
      setOption(show);
    }
  };
  const ChangeBtn = async (id: any) => {
    if (id) {
      const teachersDisctrict = await getTeachesDistrict(id);
      setTeacher(teachersDisctrict);
    }
    if (id == 'all') {
      const teacher = await getTeachers();
      setTeacher(teacher);
    }
  };

  return (
    <>
      {option.length > 0 ? (
        <div>
          <div className={'grid grid-cols-12'}>
            <div
              className={
                'col-span-4 flex items-center border p-2 rounded-md shadow gap-2'
              }
            >
              <LuListFilter className={'text-xl '} />
              <span className={'text-sm gap-2 text-gray-500'}>Lọc theo</span>
              <select className={'w-[70%]'} onChange={handlerChange}>
                <option value={'location'}> Địa Điểm</option>
                <option value={'timeslot'}> Ca học</option>
                <option value={'subject'}> Môn Học</option>
              </select>
            </div>
            <div className={'col-start-6 col-span-6  h-[40px] relative'}>
              <Swiper
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper: any) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                modules={[Navigation]}
                slidesPerView={4}
                className={'justify-center items-center '}
                spaceBetween={5}
              >
                <SwiperSlide>
                  <button
                    className={`rounded-full py-2 border text-center w-full hover:border-blue-400`}
                    onClick={() => {
                      ChangeBtn('all');
                    }}
                  >
                    Tất cả
                  </button>
                </SwiperSlide>
                {option.map(({ name, id }) => (
                  <SwiperSlide key={id}>
                    <button
                      className={classNames(
                        `rounded-full py-2 border text-center w-full hover:border-blue-400`,
                        { 'bg-blue-500': id },
                      )}
                      onClick={() => {
                        ChangeBtn(id);
                      }}
                    >
                      {name}
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button
                className={
                  'absolute top-[2px] -left-12 border border-blue-500 rounded-full p-2'
                }
                ref={navigationPrevRef}
              >
                <GrFormPrevious className={'text-xl'} />
              </button>
              <button
                className={
                  'absolute top-[2px] -right-12 border border-blue-500 rounded-full p-2'
                }
                ref={navigationNextRef}
              >
                <MdNavigateNext className={'text-xl'} />
              </button>
            </div>
          </div>
          {teacher ? <Teacher teachers={teacher} /> : <Loading />}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Fillters;
