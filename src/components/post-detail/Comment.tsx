import { IComment } from '@/service/post';
import React from 'react';
import RedButton from '../ui/RedButton';
import convertDateFormat from '@/utils/convertDateFormat';

type Props = { comment: IComment };

export default function Comment({
  comment: { name, email, password, content, _key, createdAt },
}: Props) {
  return (
    <div className='w-full flex flex-col py-5'>
      <div className='flex gap-2  items-center mb-6'>
        <span className=' font-semibold text-uPrimary text-lg '>{name}</span>
        <span className='text-gray-500 '>{`on ${convertDateFormat(
          createdAt
        )}`}</span>
      </div>
      <p className='text-gray-500 font-serif'>{content}</p>
    </div>
  );
}
