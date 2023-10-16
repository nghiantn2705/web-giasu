import { useSwiper } from 'swiper/react';
import { MdNavigateNext } from 'react-icons/md';
export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button className={'border rounded-full p-2'}>
      <MdNavigateNext className={'text-xl'} />
    </button>
  );
}
