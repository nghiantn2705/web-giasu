'use client';

import { Fragment } from 'react';
import { Field } from 'formik';

const Filters = ({ data, name, textName, classnames }: any) => {
  return (
    <>
      <Field name={name} as={'select'} className={classnames}>
        <option value="">{textName}</option>
        {data?.map((items: any) => {
          return (
            <option key={items.id} value={`${items?.id}`}>
              {items?.name}
            </option>
          );
        })}
      </Field>
    </>
  );
};

export default Filters;
