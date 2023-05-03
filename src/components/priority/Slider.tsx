import React from 'react';
import IconArrow from '../icons/IconArrow';
import Slide from './Slide';

export interface ISlide {
  image: string;
  alt: string;
  tags: string[];
  title: string;
  date: string;
}

const slides: ISlide[] = [
  {
    image: '/images/image01.jpg',
    alt: 'hi',
    tags: ['music', 'lifestyle'],
    title: 'Far far away, behind the word Mountain01',
    date: '2023-01-01',
  },
  {
    image: '/images/image02.jpg',
    alt: 'hi',
    tags: ['music', 'lifestyle'],
    title: 'App & integrations',
    date: '2023-02-02',
  },
  {
    image: '/images/image03.jpg',
    alt: 'hi',
    tags: ['music', 'video'],
    title: 'How to make one line art design',
    date: '2023-03-03',
  },
  {
    image: '/images/image04.jpg',
    alt: 'hi',
    tags: ['technology', 'lifestyle'],
    title: 'Musical Improvisiation in the spontaneous music',
    date: '2023-04-04',
  },
];
type Props = {};
const arrowClassName =
  'hover:bg-uPrimary rounded-full text-white bg-uRed p-3 box-content absolute cursor-pointer text-xl z-50 ';
export default function Slider({}: Props) {
  return (
    <section className='w-full flex items-center border bg-white shadow-sm mx-auto max-w-6xl h-96 relative '>
      <Slide slide={slides[0]} />
      <IconArrow type='left' className={arrowClassName + 'left-6'} />
      <IconArrow type='right' className={arrowClassName + 'right-6'} />
    </section>
  );
}
