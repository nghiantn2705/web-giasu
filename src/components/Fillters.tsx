'use client';

import React, { useCallback, useRef } from 'react';
import { LuListFilter } from 'react-icons/lu';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { usePathname } from 'next/navigation';
import SlideNextButton from '@/components/SwiperBtn/SliderNextbutton';
import SlidePrevButton from '@/components/SwiperBtn/SliderPrevbutton';

const navLink = [
  {
    name: 'Ngẫu Nhiên',
    link: '/',
  },
  {
    name: 'Hà Nội',
    link: '/2',
  },
  {
    name: 'Hồ Chí Minh',
    link: '/3',
  },
  {
    name: 'Đà nẵng',
    link: '/4',
  },
  {
    name: 'Nha Trang',
    link: '/4',
  },
];
const Fillters = () => {
  const router = usePathname();
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <div className={'grid grid-cols-12'}>
      <div
        className={
          'col-span-3 flex items-center border p-2 rounded-md gap-2 shadow'
        }
      >
        <span className={'text-sm flex items-center gap-2 text-gray-500'}>
          <LuListFilter className={'text-xl'} />
          Lọc theo
        </span>
        <select className={'w-[145px]'}>
          <option> Địa Điểm</option>
          <option> Ca học</option>
          <option> Môn Học</option>
          <option> Kinh Nghiệm</option>
        </select>
      </div>
      <div className={'col-start-5 col-span-7  h-[40px] relative px-5'}>
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
          {navLink.map(({ link, name }) => (
            <SwiperSlide key={name}>
              <button
                className={`rounded-full py-2 border text-center w-full hover:border-blue-400 ${
                  router === link ? 'bg-blue-400 text-white' : ''
                }`}
              >
                {name}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className={'buttonPrev absolute top-[2px] -left-8'}
          ref={navigationPrevRef}
        >
          <SlidePrevButton />
        </div>
        <div
          className={'buttonNext absolute top-[2px] -right-8'}
          ref={navigationNextRef}
        >
          <SlideNextButton />
        </div>
      </div>
    </div>
  );
};

export default Fillters;
