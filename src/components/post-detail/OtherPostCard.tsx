import { IPost } from '@/service/post';
import React from 'react';
import { hoverTransitionY } from '../TagCard';

type Props = {
  post: IPost;
  type: 'next' | 'prev';
};

export default function OtherPostCard({ post, type }: Props) {
  const { title, postImage } = post;
  const isPrev = type === 'prev';
  return (
    <div
      className={`bg-white shadow-lg flex h-32 w-[48%] items-center ${hoverTransitionY} ${
        isPrev ? 'pr-4' : 'pl-4 flex-row-reverse'
      } `}>
      <div className='w-16 h-16  shrink-0 bg-gray-200 shadow mx-7'>
        {/* image */}
      </div>
      <div>
        <h3 className='font-semibold text-uPrimary'>{title}</h3>
        <p className={`font-serif text-gray-400 ${isPrev ? '' : 'text-right'}`}>
          {isPrev ? 'Previous Story' : 'Next Story'}
        </p>
      </div>
    </div>
  );
}
