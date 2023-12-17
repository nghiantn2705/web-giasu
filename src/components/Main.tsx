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
              GS7 - Kết nối tri thức, nuôi dưỡng tương lai!
            </h2>
            <p className={'text-3xl font-bold mb-6 text-blue-tw1'}>
              Mang thành công đến <br /> với con bạn
            </p>
            <p className={'mb-4 text-blue-tw1'}>
              GS7 là một trang tìm kiếm gia sư uy tín, mang trong mình một sứ
              mệnh đó là tạo ra một môi trường học tập tích cực và hiệu quả nhất
              cho tất cả học sinh.
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
            Bạn muốn trở thành một gia sư chuyên nghiệp?
          </h3>
          <p className={'text-blue-tw1 text-xl'}>
            Với quy trình đăng ký đơn giản, GS7 là nơi lý tưởng để bạn có thể
            bắt đầu với công việc gia sư và trở thành một phần của đội ngũ Gia
            sư GS7. Bạn có thể thỏa thích chia sẻ đam mê giảng dạy và cùng xây
            dựng một môi trường học tập tích cực và hiệu quả.
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
              Bạn đang muốn tìm kiếm gia sư chất lượng?
            </h3>
            <p>Trải nghiệm dịch vụ chất lượng và chuyên nghiệp!</p>
            <p>
              Với mục đich kết nối học sinh với những gia sư chất lượng, GS7 là
              một lựa chọn tuyệt vời giúp bạn có thể tìm kiếm một người gia sư
              phù hợp với tiêu chí của bản thân. Chúng tôi cam kết sẽ tạo ra một
              môi trường học tập hiệu quả, giúp học sinh phát triển và thành
              công trong học tập.
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
            Sự đa dạng tại GS7
          </h2>
        </div>
        <div
          className={
            'flex flex-col gap-4 md:py-8 md:w-full lg:w-[60%] md:pl-12 '
          }
        >
          <h3 className={'text-xl text-blue-tw2'}>
            Hệ thống tìm kiếm gia sư GS7 hỗ trợ bạn tìm kiếm gia sư chất lượng
            nhất với đa dạng các dịch vụ và môn học phục vụ nhu cầu tìm kiếm gia
            sư của phụ huynh
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
                Đa dạng môn học và lĩnh vực:
              </h3>
              <p className={'text-blue-tw2 text-xl'}>
                Hệ thống hỗ trợ tìm kiếm gia sư dạy từ các môn cơ bản như Toán,
                Văn, Anh, Ngoại ngữ,... Cho đến các môn về năng khiếu như Âm
                nhạc, nghệ thuật và các môn chuyên ngành Đại học.
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
                Đa dạng tìm kiếm:
              </h3>
              <p className={'text-blue-tw2 text-xl'}>
                Với giao diện tìm kiếm linh hoạt, phụ huynh có thể lọc theo môn
                học, khu vực, lớp, tùy vào yêu cầu tìm kiếm của quý phụ huynh
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
                Đa dạng hồ sơ gia sư:
              </h3>
              <p className={'text-blue-tw2 text-xl'}>
                Hệ thống cung cấp chi tiết về hồ sơ của các gia sư và có sự phân
                chia rõ ràng theo từng môn học và từng khối lớp, vì vậy sẽ giúp
                phụ huynh có sự lựa chọn đa dạng hơn
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
