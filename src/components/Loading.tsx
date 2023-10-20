import classNames from 'classnames';

const Loading = () => {
  return (
    <div
      className={
        ' mt-10 w-full h-full flex items-center justify-center z-0 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:opacity-60 before:-z-10'
      }
    >
      <div className={'relative w-20 h-20 inline-block'}>
        {[...Array(12)].map((x, i) => {
          return (
            <span
              key={i}
              className={classNames(
                'block animate-lds-spinner origin-[40px_40px] after:absolute after:top-[3px] after:left-[37px] after:w-1 after:h-[18px] after:rounded-[20%] after:bg-red-400',
                {
                  'rotate-0 animation-delay-plus-1100': i === 0,
                  'rotate-[30deg] animation-delay-plus-1000': i === 1,
                  'rotate-[60deg] animation-delay-plus-900': i === 2,
                  'rotate-90 animation-delay-plus-800': i === 3,
                  'rotate-[120deg] animation-delay-plus-700': i === 4,
                  'rotate-[150deg] animation-delay-plus-600': i === 5,
                  'rotate-180 animation-delay-plus-500': i === 6,
                  'rotate-[210deg] animation-delay-plus-400': i === 7,
                  'rotate-[240deg] animation-delay-plus-300': i === 8,
                  'rotate-[270deg] animation-delay-plus-200': i === 9,
                  'rotate-[300deg] animation-delay-plus-100': i === 10,
                  'rotate-[330deg] animation-delay-none': i === 11,
                },
              )}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Loading;
