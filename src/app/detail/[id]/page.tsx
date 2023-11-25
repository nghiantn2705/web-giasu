import React, { useState } from 'react';
import Detail from '@/components/Detail/Detail';
import { getTeacherByid } from '@/services/teacher';

const page = async (props: any) => {
  const teacher = await getTeacherByid(props?.params);

  console.log(teacher);
  console.log(props?.params);
  return (
    <div>
      <Detail teacher={teacher} />
    </div>
  );
};

export default page;
