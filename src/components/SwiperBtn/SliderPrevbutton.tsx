import { useSwiper } from 'swiper/react';
import { GrFormPrevious } from 'react-icons/gr';
export default function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button className={'border rounded-full p-2'}>
      <GrFormPrevious className={'text-xl'} />
    </button>
  );
}
