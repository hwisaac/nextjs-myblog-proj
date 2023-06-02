'use client';

import React from 'react';

import UnderlineHeading from './ui/UnderlineHeading';
import { IPost } from '@/service/post';
import convertDateFormat from '@/utils/convertDateFormat';
import Link from 'next/link';
import Image from 'next/image';

type Props = { post: IPost };

export default function ArticleCard({ post }: Props) {
  return (
    <div className='flex h-20 shrink-0 w-full'>
      <div className='w-[25%] shrink-0 h-full bg-slate-200 relative saturate-50'>
        {post?.postImage && (
          <Image
            className='object-cover'
            src={post.postImage}
            fill
            alt={post.title}
            sizes='100px'
          />
        )}
      </div>
      <div className='ml-3 justify-between pb-2 w-[75%]'>
        <Link href={`/posts/${post.slug}`}>
          <UnderlineHeading text={post.title} size='small' />
        </Link>
        <span className='block font-serif h-1/4 text-gray-500 text-xs'>
          {convertDateFormat(post.createdAt)}
        </span>
      </div>
    </div>
  );
}
