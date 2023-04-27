import React from 'react';
import { IPost } from './footer/GridSection';

type Props = { post: IPost };

export default function ArticleCard({ post }: Props) {
  return (
    <div className='flex h-20'>
      <div className='w-[30%] h-full bg-slate-700'></div>
      <div className='flex flex-col ml-3 justify-between pb-2'>
        <p className='w-full h-3/4 text-uPrimary font-semibold overflow-hidden '>
          {post.title}
        </p>
        <span className='font-serif h-1/4 text-gray-500 text-xs'>
          {post.date}
        </span>
      </div>
    </div>
  );
}
