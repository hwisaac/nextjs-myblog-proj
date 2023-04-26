import React from 'react';
import { IPost } from './footer/GridSection';

type Props = { post: IPost };

export default function ArticleCard({ post }: Props) {
  return (
    <div className='flex border h-24 p-2'>
      <div className=' w-9 h-9 bg-slate-700 border'></div>
      <div className='flex flex-col border'>
        <p>{post.title}</p>
        <span>{post.date}</span>
      </div>
    </div>
  );
}
