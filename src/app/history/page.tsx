import React from 'react';

export default function App() {
  return (
    <div>
      <main className={'container mx-auto'}>
        <h1 className="pt-10 text-3xl font-bold text-center">
          Lịch sử đăng kí gia sư
        </h1>
        <table className={'mt-5 min-w-full bg-white rounded-lg shadow-lg'}>
          <thead>
            <tr className={'bg-red-400 text-white'}>
              <th className={'py-3 px-6 text-left  '}>STT</th>
              <th className={'py-3 px-6 text-left '}>Tên sản phẩm</th>
              <th className={'py-3 px-6 text-center '}>Giá</th>
              <th className={'py-3 px-6 text-center '}>Số lượng</th>
            </tr>
          </thead>
          <tbody>
            <tr className={'bg-gray-100'}>
              <td className={'py-3 px-6'}>1</td>
              <td className={'py-3 px-6'}>Sản phẩm 1</td>
              <td className={'py-3 px-6 text-center'}>100</td>
              <td className={'py-3 px-6 text-center'}>50</td>
            </tr>
            <tr className="bg-gray-200">
              <td className={'py-3 px-6'}>2</td>
              <td className={'py-3 px-6'}>Sản phẩm 2</td>
              <td className={'py-3 px-6 text-center'}>150</td>
              <td className={'py-3 px-6 text-center'}>30</td>
            </tr>
            <tr className={'bg-gray-100'}>
              <td className={'py-3 px-6'}>3</td>
              <td className={'py-3 px-6'}>Sản phẩm 3</td>
              <td className={'py-3 px-6 text-center'}>80</td>
              <td className={'py-3 px-6 text-center'}>70</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}
