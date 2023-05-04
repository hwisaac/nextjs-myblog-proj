import convertDateFormat from '@/utils/convertDateFormat';
import formatCase from '@/utils/formatCase';
import { randomColorBy } from '@/utils/randomColor';
import React from 'react';
import UnderlineHeading from '../ui/UnderlineHeading';

type Props = { date: string; title: string; tags: string[] };

export default function SlideContents({ date, title, tags }: Props) {
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

      <UnderlineHeading
        text={title}
        addClassName='text-white text-center [text-shadow:_3px_3px_5px_rgba(0,0,0,0.5)]'
      />

      <p className='text-2xl font-serif font-light'>
        {convertDateFormat(date)}
      </p>
    </div>
  );
}
