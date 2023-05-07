import React from 'react';
import RedLineTitle from '../ui/RedLineTitle';
import RedButton from '../ui/RedButton';

type Props = {};

export default function LeaveReplySection({}: Props) {
  return (
    <section className='px-10'>
      <RedLineTitle title='Leave a Reply' />
      <div className='grid grid-cols-2 grid-rows-[auto_1fr_1fr] gap-3 text-uFontColor'>
        <textarea
          rows={3}
          className='bg-uBgColor border-fuchsia-200 border w-full  col-span-2 p-4 resize-none outline-uRed'
          placeholder='Comment'
        />
        <input
          type='text'
          className='bg-uBgColor border-fuchsia-200 border w-full h-10 px-4 outline-uRed'
          placeholder='Name'
        />
        <input
          type='text'
          className='bg-uBgColor border-fuchsia-200 border w-full h-10 px-4 outline-1 outline-uRed'
          placeholder='Email'
        />
        <input
          type='text'
          className='bg-uBgColor border-fuchsia-200 border w-full h-10  col-span-2 px-4 outline-1 outline-uRed'
          placeholder='Website'
        />
      </div>

      <div className='pt-10 flex justify-end'>
        <RedButton text='Post Comment' />
      </div>
    </section>
  );
}
