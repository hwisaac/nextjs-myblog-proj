'use client';
import React from 'react';
import TagCard from './TagCard';
import IconComment from './icons/IconComment';
import IconLike from './icons/IconLike';
import UnderlineHeading from './ui/UnderlineHeading';
import { IPost } from '@/service/post';

type Props = { post: IPost };

const iconClassName = 'text-uRed';
export default function PostCard({
  post: { title, date, comments, likes, description, categories, image },
}: Props) {
  return (
    <div className='flex flex-col shadow-md bg-white px-10 py-8 relative'>
      <div className='flex items-center gap-6'>
        <div className='hidden sm:block w-24 h-24 bg-slate-100'>
          {/* image */}
        </div>
        <div className='text-uFontColor space-y-2'>
          <UnderlineHeading text={title} />
          <div className='flex gap-4 font-serif'>
            <span>{date}</span>
            <span className='flex items-center gap-2 hover:text-uRed cursor-pointer'>
              <IconComment className={iconClassName} /> {comments}
            </span>
            <span className='flex items-center gap-2 hover:text-uRed cursor-pointer '>
              <IconLike className={iconClassName} /> {likes}
            </span>
          </div>
        </div>
      </div>
      <p className='text-uFontColor mt-7 font-serif'>{description}</p>
      <div className='flex gap-2 mt-10'>
        {categories.map((tag, index) => (
          <TagCard key={index} tag={tag} />
        ))}
      </div>
      <button className='absolute px-5 h-10 -bottom-5 border bg-uPrimary text-white text-sm font-light left-[50%] -translate-x-[50%]'>
        Continue Reading
      </button>
    </div>
  );
}
