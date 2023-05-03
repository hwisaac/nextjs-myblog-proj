import Image from 'next/image';
import React from 'react';
import { ISlide } from './Slider';

type Props = { slide: ISlide };

export default function Slide({ slide }: Props) {
  const { image, alt, date, title, tags } = slide;
  return (
    <div className='w-full h-full relative flex justify-center items-center'>
      <div className='w-full h-full absolute z-20 bg-orange-500/30'>
        <Image
          src={image}
          alt={alt}
          className='object-cover w-full h-full border-4 z-20 border-uPrimary saturate-50 brightness-75'
          fill
        />
      </div>
      <div className='flex flex-col items-center border border-uRed w-fit h-fit z-40 absolute text-white text-3xl'>
        <p>Music, Technology Travel</p>
        <p>Far far away, 어쩌구</p>
        <p>August 15,2019, 2min</p>
      </div>
    </div>
  );
}
