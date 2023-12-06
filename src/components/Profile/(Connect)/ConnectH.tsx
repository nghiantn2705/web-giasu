'use client';

import React from 'react';

const ConnectH = () => {
  return (
    <>
      <div className={''}>
        <ul className="flex flex-col gap-3 pl-0 mb-0 rounded-lg">
          <li className="relative flex items-center px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
            <div className="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
              <img
                src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/kal-visuals-square.jpg"
                alt="kal"
                className="w-full shadow-soft-2xl rounded-xl"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <h6 className="mb-0 leading-normal text-sm">Sophie B.</h6>
              <p className="mb-0 leading-tight text-xs">
                Hi! I need more information..
              </p>
            </div>
            <a
              className="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100"
              href="javascript:;"
            >
              Reply
            </a>
          </li>
          <li className="relative flex items-center px-0 py-2 bg-white border-0 border-t-0 text-inherit">
            <div className="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
              <img
                src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/marie.jpg"
                alt="kal"
                className="w-full shadow-soft-2xl rounded-xl"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <h6 className="mb-0 leading-normal text-sm">Anne Marie</h6>
              <p className="mb-0 leading-tight text-xs">
                Awesome work, can you..
              </p>
            </div>
            <a
              className="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100"
              href="javascript:;"
            >
              Reply
            </a>
          </li>
          <li className="relative flex items-center px-0 py-2 bg-white border-0 border-t-0 text-inherit">
            <div className="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
              <img
                src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/ivana-square.jpg"
                alt="kal"
                className="w-full shadow-soft-2xl rounded-xl"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <h6 className="mb-0 leading-normal text-sm">Ivanna</h6>
              <p className="mb-0 leading-tight text-xs">About files I can..</p>
            </div>
            <a
              className="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100"
              href="javascript:;"
            >
              Reply
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ConnectH;
