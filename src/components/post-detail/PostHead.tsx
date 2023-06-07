import React from 'react';
import IconComment from '../icons/IconComment';
import convertDateFormat from '@/utils/convertDateFormat';

type Props = { title?: string; createdAt?: string; commentsLength: number };

export default function PostHead({ title, createdAt, commentsLength }: Props) {
  return (
    <section className='py-10 space-y-10'>
      <h1 className='text-center font-bold text-uPrimary text-4xl px-10'>
        {title}
      </h1>
      <div className='flex justify-center gap-5 font-serif text-uFontColor'>
        <div className='flex items-center gap-1'>
          <span> {commentsLength}</span>
          <IconComment className='text-uRed relative -top-[2px]' />
        </div>
        <div className='w-7 h-[2px] bg-gray-200 self-center' />

        <span>{createdAt && convertDateFormat(createdAt)}</span>
      </div>
    </section>
  );
}
