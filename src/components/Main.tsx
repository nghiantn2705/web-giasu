import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
const Main = () => {
  return (
    <div>
      <section className={'bg-banner-main bg-cover bg-center py-20'}>
        <div className={'container'}>
          <div className={'flex flex-col bg-white  p-7 md:w-[50%] xl:w-[35%]'}>
            <h2 className={'text-xl font-bold mb-2 text-blue-tw2 '}>
              Kết nối gia sư GS7
            </h2>
            <p className={'text-3xl font-bold mb-6 text-blue-tw1'}>
              Mang thành công đến <br /> với con bạn
            </p>
            <p className={'mb-4 text-blue-tw1'}>
              Bạn muốn con chăm ngoan, học giỏi? Đăng <br /> ký ngay! Đội ngũ
              gia sư giỏi của GS7 <br /> sẽ giúp con bạn tiến bộ nhanh chóng.
            </p>
            <Link href={'./giasu'}>
              <button
                type={'button'}
                className={
                  'w-fit py-2 px-3 text-white rounded-md bg-blue-tw text-lg'
                }
              >
                Đăng ký thuê gia sư ngay
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className={'container flex flex-col md:flex-row px-4 py-12'}>
        <div className={'md:w-[40%] flex justify-center'}>
          <Image src={'/banner-gs-1.jpg'} width={350} height={230} alt={''} />
        </div>
        <div className={'flex flex-col gap-4 py-4 md:pl-12 md:py-8 md:w-[60%]'}>
          <h3 className={'text-2xl font-bold text-blue-tw1'}>
            Bạn là giáo viên, sinh viên?
          </h3>
          <p className={'text-blue-tw1 text-xl'}>
            Gia nhập vào đội ngũ gia sư của GS7, nhận lớp và có thêm thu nhập từ
            những kiến thức , kỹ năng giảng dạy của bạn.
          </p>
          <div className={'flex gap-5  text-xl'}>
            <Link
              href={'./auth/teacher/register'}
              className={'text-blue-tw hover:underline'}
            >
              {'>'} Đăng ký làm gia sư
            </Link>
            <Link
              href={'./auth/teacher'}
              className={'text-blue-tw hover:underline'}
            >
              {'>'} Đăng nhập tài khoản
            </Link>
          </div>
          <Link
            href={''}
            className={
              'flex justify-center items-center gap-2 bg-blue-tw text-white w-fit px-4 py-2 rounded-md font-bold uppercase'
            }
          >
            <FaArrowRightLong />
            <span>Đến trang dành cho gia sư</span>
          </Link>
        </div>
      </section>
      <section className={'bg-blue-tw text-white '}>
        <div
          className={
            'container flex flex-col gap-5 md:gap-0 md:flex-row px-4 py-12'
          }
        >
          <div
            className={'flex flex-col gap-4 md:py-8 w-full md:w-[60%] text-xl'}
          >
            <h3 className={'text-center md:text-left text-2xl font-bold'}>
              Bạn cần thuê gia sư?
            </h3>
            <p>Trải nghiệm dịch vụ chất lượng và chuyên nghiệp!</p>
            <p>
              Thật tốn thời gian khi gặp phải gia sư không phù hợp. GS7
              luôn làm việc chuyên nghiệp và trách nhiệm, bắt đầu từ việc tuyển
              chọn đến đào tạo gia sư. Đảm bảo gia sư luôn đạt tiêu chuẩn về
              kiến thức và kỹ năng giảng dạy.
            </p>
            <Link
              href={'/giasu'}
              className={
                'bg-white text-blue-tw w-fit px-4 py-2 rounded-md font-bold uppercase flex justify-center items-center gap-2'
              }
            >
              <FaArrowRightLong />
              <span> Đến trang thuê gia sư</span>
            </Link>
          </div>
          <div className={'md:w-[40%] flex justify-center'}>
            <Image src={'/banner-gs-2.png'} width={350} height={230} alt={''} />
          </div>
        </div>
      </section>
      <section
        className={'container flex flex-col md:flex-row px-4 md:py-8 lg:py-12'}
      >
        <div className={'lg:w-[25%] flex justify-center lg:pl-12 py-8 '}>
          <h2 className={'text-2xl font-bold text-blue-tw1'}>
            Dịch vụ tại GS7
          </h2>
        </div>
        <div
          className={
            'flex flex-col gap-4 md:py-8 md:w-full lg:w-[60%] md:pl-12 '
          }
        >
          <h3 className={'text-xl text-blue-tw2'}>
            Trung tâm gia sư GS7 luôn nỗ lực để cung cấp cho bạn dịch vụ gia sư
            chất lượng nhất, bao gồm:
          </h3>
          <div className={'flex gap-5 justify-center'}>
            <div className={'w-[20%] flex justify-center'}>
              <span
                className={
                  'w-12 h-12 flex justify-center items-center text-xl text-center font-bold rounded-full border bg-blue-tw text-white'
                }
              >
                1
              </span>
            </div>
            <div className={'pt-2'}>
              <h3 className={'text-2xl font-bold mb-2 text-blue-tw1'}>
                Các môn phổ thông
              </h3>
              <p className={'text-blue-tw2 text-xl'}>
                Bao gồm tất cả các môn trong chương trình học phổ thông: gia sư
                Toán, Vật Lý, Hóa Học, Sinh Học, Gia sư Văn, Lịch Sử, Địa Lý,
                Tiếng Anh, Gia sư Tiểu Học, và nhiều môn học khác nữa.
              </p>
            </div>
          </div>
          <div className={'flex gap-5 justify-center'}>
            <div className={'w-[20%] flex justify-center'}>
              <span
                className={
                  'w-12 h-12 flex justify-center items-center text-xl text-center font-bold rounded-full border bg-blue-tw text-white'
                }
              >
                2
              </span>
            </div>
            <div className={'pt-2'}>
              <h3 className={'text-2xl font-bold mb-2 text-blue-tw1'}>
                Các môn ngoại ngữ
              </h3>
              <p className={'text-blue-tw2 text-xl'}>
                Chủ yếu dành cho những người đã đi làm, bao gồm gia sư dạy giao
                tiếp các môn: Gia sư Tiếng Anh, Tiếng Nhật, Tiếng Hàn, Tiếng
                Pháp, Tiếng Trung, Tiếng Tây Ban Nha và các môn ngoại ngữ khác.
              </p>
            </div>
          </div>
          <div className={'flex gap-5 justify-center'}>
            <div className={'w-[20%] flex justify-center'}>
              <span
                className={
                  'w-12 h-12 flex justify-center items-center text-xl text-center font-bold rounded-full border bg-blue-tw text-white'
                }
              >
                3
              </span>
            </div>
            <div className={'pt-2'}>
              <h3 className={'text-2xl font-bold mb-2 text-blue-tw1'}>
                Các môn năng khiếu
              </h3>
              <p className={'text-blue-tw2 text-xl'}>
                Chủ yếu liên quan đến các môn nghệ thuật như: Piano, Guitar,
                Organ, Mỹ Thuật, Thanh Nhạc. Đối với những môn này, để bạn có
                được gia sư sẽ tốn nhiều thời gian hơn.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
