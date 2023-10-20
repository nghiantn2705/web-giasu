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
import { getTeachesDistrict, getTeachesTimeSlot } from '../../action/getByID';
import Teacher from '@/components/Teacher/Teacher';
import Loading from '@/components/Loading';

const Fillters = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const [option, setOption] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [request, setRequest] = useState('');
  const [select, setSelect] = useState('');
  const [active, setActive] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      if (!select || select == 'location') {
        const res = await getDistrict();
        setOption(res);
        if (request) {
          const teacherDistrict = await getTeachesDistrict(request);
          setTeacher(teacherDistrict);
        }
        if (!request || request == 'all') {
          const teacher = await getTeachers();
          setTeacher(teacher);
        }
      }
      if (select == 'timeslot') {
        const timeslot = await getTimeslot();
        setOption(timeslot);
        if (request) {
          const teacherDistrict = await getTeachesTimeSlot(request);
          setTeacher(teacherDistrict);
        }
        if (!request || request == 'all') {
          const teacher = await getTeachers();
          setTeacher(teacher);
        }
      }
    };
    fetchData();
  }, [setOption, request, select]);
  const handlerChange = (e: any) => {
    const renderText = e.target.value || 'location';
    setSelect(renderText);
  };
  const ChangeBtn = async (id: string) => {
    setRequest(id);
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
                    className={`rounded-full py-2 border text-center w-full hover:border-blue-400 ${
                      active == 0 ? 'bg-blue-500 text-white' : ''
                    }`}
                    onClick={() => {
                      ChangeBtn('all');
                      setActive(0);
                    }}
                  >
                    Tất cả
                  </button>
                </SwiperSlide>
                {option.map(({ name, id, index }) => (
                  <SwiperSlide key={id}>
                    <button
                      className={`rounded-full py-2 border text-center w-full hover:border-blue-400 target:bg-blue-500 target:text-white ${
                        active == id ? 'bg-blue-500 text-white' : ''
                      }`}
                      onClick={() => {
                        ChangeBtn(id);
                        setActive(id);
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
          {teacher.length > 0 ? <Teacher teachers={teacher} /> : <Loading />}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Fillters;
