import React from 'react';

type Props = { title: string };

export default function RedLineTitle({ title }: Props) {
  return (
    <div className='w-full relative mb-7 flex items-center'>
      <h2 className='flex text-2xl w-fit text-uPrimary mr-4'>{title}</h2>
      <div className='flex grow h-[3px] bg-uRed' />
    </div>
  );
}
