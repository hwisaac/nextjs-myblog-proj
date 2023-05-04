import Image from 'next/image';
import React from 'react';
import { ISlide } from './Slider';
import SlideContents from './SlideContents';

type Props = { slide: ISlide };

export default function SlideCard({ slide }: Props) {
  const { image, alt, date, title, tags } = slide;

  return (
    <div className='w-full h-full relative flex justify-center items-center'>
      <div className='w-full h-full absolute z-20'>
        <Image
          src={image}
          alt={alt}
          className='object-cover w-full h-full z-20 saturate-50 brightness-75'
          sizes='400px'
          fill
          priority
          // placeholder='blur'
          quality={50}
        />
      </div>
      <SlideContents tags={tags} date={date} title={title} />
    </div>
  );
}
