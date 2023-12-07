import React, { useEffect, useState } from 'react';

import { IFeedback } from '@/types/IFeedback';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { getFeedback } from '@/services/feedback';

interface IProps {
  idParams: number;
}
const FeedBack = ({ idParams }: IProps) => {
  const [feedbackData, setFeedbackData] = useState<IFeedback[]>();
  useEffect(() => {
    (async () => {
      const resFeedback = await getFeedback({ id: idParams });
      setFeedbackData(resFeedback);
    })();
  }, [idParams]);

  return (
    <>
      <div className=" col-span-2 text-left">
        <div className="text-left pt-2 flex flex-col gap-4">
          {feedbackData?.map((item: IFeedback, index) => (
            <div key={index} className={'py-2 border-b border-gray-200'}>
              <div className="grid grid-cols-10 gap-5 ">
                <div className={'col-span-5'}>
                  <span className="text-base text-blue-tw2 font-bold ">
                    {item?.id_sender}
                  </span>
                  <div className={'text-xs text-stone-400 flex gap-4'}>
                    <span>
                      {item
                        ? format(new Date(item.updated_at), 'HH:mm:ss')
                        : ''}
                    </span>

                    <span>
                      {item
                        ? format(new Date(item.updated_at), 'dd/MM/yyyy')
                        : ''}
                    </span>
                  </div>
                </div>

                <div className="col-span-5 text-right">
                  {[1, 2, 3, 4, 5].map((star, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className={`text-${
                        star <= parseInt(item?.point) ? 'amber-300' : 'gray-200'
                      } cursor-pointer`}
                    />
                  ))}
                </div>
              </div>
              <div className="">
                <span className="text-base ">{item?.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

FeedBack.propTypes = {};

export default FeedBack;
