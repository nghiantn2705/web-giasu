import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className={'h-[300px] z-0 border rounded-md '}>
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={1500}
        effect={'fade'}
        spaceBetween={50}
        slidesPerView={1}
        className={'h-full'}
        pagination={{ clickable: true }}
        navigation={true}
      >
        <SwiperSlide>
          <div
            className={
              'flex justify-center items-center bg-banner-home-1 bg-cover bg-top h-[300px]'
            }
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={
              'flex justify-center items-center bg-banner-home-2 bg-cover bg-top h-[300px]'
            }
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={
              'flex justify-center items-center bg-banner-home-2 bg-cover bg-top h-[300px]'
            }
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
