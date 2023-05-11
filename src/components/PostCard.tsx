'use client';
import React from 'react';
import TagCard from './TagCard';
import IconComment from './icons/IconComment';
import IconLike from './icons/IconLike';
import UnderlineHeading from './ui/UnderlineHeading';
import { IPost } from '@/service/post';
import convertDateFormat from '@/utils/convertDateFormat';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type Props = { post: IPost; size?: 'small' | 'normal' };

const iconClassName = 'text-uRed';
export default function PostCard({
  post: {
    title,
    slug,
    thumbnail,
    createdAt,
    updatedAt,
    commentsLength,
    description,
    tags,
    postId,
  },
  size = 'normal',
}: Props) {
  const router = useRouter();
  return (
    <div className='flex flex-col shadow-md bg-white px-10 py-8 relative'>
      <div className='flex items-center gap-6'>
        <div className='hidden sm:block w-24 h-24 bg-slate-100 shrink-0'>
          {/* image */}
        </div>
        <div className='text-uFontColor space-y-2'>
          <Link href={`/posts/${slug}`}>
            <UnderlineHeading text={title} size={size} />
          </Link>
          <div className='flex gap-4 font-serif'>
            <span>{convertDateFormat(createdAt)}</span>
            {size !== 'small' && (
              <>
                <span className='flex items-center gap-2 hover:text-uRed cursor-pointer'>
                  <IconComment className={iconClassName} /> {commentsLength}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
      <p className='text-uFontColor mt-7 font-serif'>
        {size === 'small' ? description.slice(0, 100) + '...' : description}
      </p>
      <div className='flex gap-2 mt-10'>
        {tags.map((tag, index) => (
          <TagCard key={index} tag={tag} />
        ))}
      </div>
      {size === 'normal' && (
        <button
          className='absolute px-5 h-10 -bottom-5 border bg-uPrimary text-white text-sm font-light left-[50%] -translate-x-[50%]'
          onClick={() => router.push(`/posts/${slug}`)}>
          Continue Reading
        </button>
      )}
    </div>
  );
}
