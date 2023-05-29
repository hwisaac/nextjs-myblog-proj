'use client';
import { IComment } from '@/service/post';
import React from 'react';
import RedButton from '../ui/RedButton';
import convertDateFormat from '@/utils/convertDateFormat';
import IconClose from '../icons/IconClose';

type Props = { comment: IComment; postId: string };

export default function Comment({
  comment: { name, email, password, content, _key, createdAt },
  postId,
}: Props) {
  const onDeleteComment = () => {
    fetch(`/api/posts/${postId}/comments/${_key}`, {
      method: 'DELETE',
    }).then(() => console.log('댓글삭제완료'));
  };
  return (
    <div className='w-full flex flex-col py-5'>
      <div className='flex justify-between items-center mb-6 '>
        <div className='flex gap-2  items-center'>
          <span className=' font-semibold text-uPrimary text-lg '>{name}</span>
          <span className='text-gray-500 '>{`on ${convertDateFormat(
            createdAt
          )}`}</span>
        </div>
        <div>
          <span>
            <IconClose
              className='cursor-pointer bg-gray-100 hover:bg-gray-200'
              size={20}
              onClick={onDeleteComment}
            />
          </span>
        </div>
      </div>
      <p className='text-gray-500 font-serif'>{content}</p>
    </div>
  );
}
