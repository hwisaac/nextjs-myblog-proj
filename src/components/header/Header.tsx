'use client';
import React, { useEffect, useRef } from 'react';
import SNSSection from './SNSSection';
import BlogTitle from './BlogTitle';
import SearchIcon from './SearchIcon';
import NavBar from './NavBar';
import TopNav from './TopNav';
import { useInView } from 'framer-motion';

type Props = {};

export default function Header({}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <>
      <TopNav show={!isInView} />
      <header className='border-red-800 max-w-5xl mx-auto py-20 space-y-10'>
        <div className='flex justify-center items-center relative'>
          <SNSSection />
          <BlogTitle />
          <SearchIcon />
        </div>
        <div ref={ref}>
          <NavBar />
        </div>
      </header>
    </>
  );
}
