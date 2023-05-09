import React from 'react';

type Props = {};

export default function TagHeading({}: Props) {
  return (
    <div className='bg-white shadow-md flex items-center p-20 justify-between gap-20 text-uFontColor'>
      <div className='w-1/3 flex flex-col items-center relative'>
        <span className='absolute top-1/2 -translate-y-1/2  text-[12rem] text-gray-400/20'>
          4
        </span>
        <h1 className='text-4xl font-semibold text-uPrimary'>
          <em className='text-sky-400 inline'>#</em> Lifestyle
        </h1>
        <span>4 - Articles</span>
      </div>
      <p className='font-serif w-2/3 text-center'>
        Sometimes you might want to put your site behind closed doors If you’ve
        got a publication that you don’t want the world to see yet because it’s
        not ready to launch, you can hide your Ghost site behind a simple shared
        pass-phrase.
      </p>
    </div>
  );
}
