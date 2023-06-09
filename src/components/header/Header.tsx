'use client';
import React, { useEffect, useRef } from 'react';
import SNSSection from './SNSSection';
import BlogTitle from './BlogTitle';
import NavBar from './NavBar';
import TopNav from './TopNav';
import { useInView } from 'framer-motion';
import Account from './Account';

type Props = {};

export default function Header({}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <>
      <TopNav show={!isInView} />
      <header className='border-red-800 max-w-5xl mx-auto py-20 space-y-10'>
        <div className='flex justify-center items-center relative'>
          <SNSSection />
          <BlogTitle />
          <Account />
        </div>
        <div className='relative' ref={ref}>
          <NavBar />
        </div>
      </header>
    </>
  );
}
