import classNames from 'classnames';

const Loading = () => {
  return (
    <div
      className={
        'w-full h-full flex items-center justify-center z-0 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:opacity-60 before:-z-10'
      }
    >
      <div className={'relative w-20 h-20 inline-block'}>
        {[...Array(3)].map((x, i) => {
          return (
            <span
              key={i}
              className={classNames(
                'block animate-lds-spinner border-box absolute w-[64px] h-[64px] m-2 border-2 border-solid border-white rounded-full border-t-white border-b-gray-500 border-l-gray-500 border-r-gray-500',
                {
                  'animation-delay-plus-450': i === 0,
                  'animation-delay-plus-300': i === 1,
                  'animation-delay-plus-150': i === 2,
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
