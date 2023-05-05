'use client';
import React, { useState } from 'react';
import SlideCard from './SlideCard';
import { AnimatePresence, motion } from 'framer-motion';
import Circles from './Circles';
import SliderArrows from './SliderArrows';
import { usePathname } from 'next/navigation';

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

const divVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1 },
  },
};
export default function Slider() {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const pathname = usePathname();
  if (pathname !== '/') return null;
  const onNext = () => {
    setVisibleIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  const onPrev = () => {
    setVisibleIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className='w-full flex items-center border bg-white shadow-sm mx-auto max-w-6xl h-96 relative mb-20'>
      <AnimatePresence>
        <motion.div
          variants={divVariants}
          initial='initial'
          animate='animate'
          exit='exit'
          key={visibleIndex}
          className='absolute w-full h-full'>
          <SlideCard slide={slides[visibleIndex]} />
        </motion.div>
      </AnimatePresence>

      <Circles
        visibleIndex={visibleIndex}
        setVisibleIndex={setVisibleIndex}
        slidesLength={slides.length}
      />
      <SliderArrows onNext={onNext} onPrev={onPrev} />
    </section>
  );
}
