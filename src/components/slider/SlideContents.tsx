'use client';
import convertDateFormat from '@/utils/convertDateFormat';
import formatCase from '@/utils/formatCase';
import { randomColorBy } from '@/utils/randomColor';
import React from 'react';
import UnderlineHeading from '../ui/UnderlineHeading';
import Link from 'next/link';

type Props = {
  createdAt: string;
  title: string;
  tags: string[];
  postId: string;
};

export default function SlideContents({
  createdAt,
  title,
  tags,
  postId,
}: Props) {
  return (
    <div className='flex flex-col items-center w-fit h-fit z-40 absolute text-white gap-10 max-w-[70%]'>
      <p className='space-x-10 text-3xl'>
        {tags.map((tag) => (
          <span
            className='inline-block hover:-translate-y-[3px] transition-transform cursor-pointer'
            key={tag}>
            <em className={`${randomColorBy(tag).text}`}># </em>
            {formatCase(tag)}
          </span>
        ))}
      </p>
      <Link href={`/posts/${postId}`}>
        <UnderlineHeading
          text={title}
          addClassName='text-white text-center [text-shadow:_3px_3px_5px_rgba(0,0,0,0.5)]'
          textCenter
        />
      </Link>
      <p className='text-2xl font-serif font-light'>
        {convertDateFormat(createdAt)}
      </p>
    </div>
  );
}
