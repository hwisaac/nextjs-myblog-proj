import { IComment } from '@/service/post';
import React from 'react';
import RedButton from '../ui/RedButton';

type Props = { comment: IComment };

export default function Comment({
  comment: { username, email, password, content, createdAt },
}: Props) {
  return (
    <div className='w-full flex flex-col py-5'>
      <div className='flex gap-2  items-center mb-6'>
        <span className=' font-semibold text-uPrimary text-lg '>
          {username}
        </span>
        <span className=' text-gray-500 '>{`on ${createdAt}`}</span>
      </div>
      <p className='text-gray-500 font-serif'>{content}</p>
    </div>
  );
}
