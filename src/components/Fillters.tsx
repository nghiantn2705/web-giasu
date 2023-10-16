'use client';

import React, { useEffect, useState } from 'react';
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
interface ILink {
  name: string;
  link: string;
}

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

const navHour = [
  {
    name: 'Ngẫu Nhiên',
    link: '/',
  },
  {
    name: '7h - 9h',
    link: '/2',
  },
  {
    name: '9h30 - 12h30',
    link: '/3',
  },
  {
    name: '13h30 - 15h30',
    link: '/4',
  },
  {
    name: '16h30 - 18h30',
    link: '/4',
  },
];
const Fillters = () => {
  const router = usePathname();
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const [option, setOption] = useState(navLink);

  const handlerChange = (e: any) => {
    const renderText = e.target.value;
    if (renderText == 'location') {
      const show: ILink[] = navLink;
      setOption(show);
    }
    if (renderText == 'classhour') {
      const show: ILink[] = navHour;
      setOption(show);
    }
  };
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
        <select className={'w-[145px]'} onChange={handlerChange}>
          <option value={'location'}> Địa Điểm</option>
          <option value={'classhour'}> Ca học</option>
          <option value={'subject'}> Môn Học</option>
          <option value={'experience'}> Kinh Nghiệm</option>
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
          {option.map(({ link, name }) => (
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
