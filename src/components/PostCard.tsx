import React from 'react';
import { IPost } from './LatestArticlesBlock';
import TagCard from './TagCard';
import IconComment from './icons/IconComment';
import IconLike from './icons/IconLike';

type Props = { post: IPost };

const iconClassName = 'text-uRed';
export default function PostCard({
  post: { title, date, comments, likes, description, categories, image },
}: Props) {
  return (
    <div className='flex flex-col border shadow-md bg-white px-10 py-8'>
      <div className='flex items-center gap-6'>
        <div className='w-20 h-20 border bg-slate-100'>{/* image */}</div>
        <div className='border text-uFontColor space-y-2'>
          <h3 className='text-uPrimary font-bold text-2xl'>{title}</h3>
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
    </div>
  );
}
