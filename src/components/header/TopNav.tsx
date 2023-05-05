'use client';
import useScrollY from '@/hooks/useScrollY';
import React, { useEffect } from 'react';
import BlogTitle from './BlogTitle';
import Link from 'next/link';
import { motion, useAnimate } from 'framer-motion';

type Props = {
  show: boolean;
};

const navList = [
  { name: 'Home', href: '/', subnav: [] },
  { name: 'Header Styles', href: '/header-styles', subnav: [] },
  { name: 'Post Features', href: '/posts', subnav: [] },
  { name: '#Tag', href: '/tag', subnav: [] },
  { name: 'About', href: '/about', subnav: [] },
  { name: 'Portfolio', href: '/portfolio', subnav: [] },
  { name: 'Contact', href: '/contact', subnav: [] },
];

const variants = {
  hide: {
    opacity: 0,
    y: '-4rem',
  },
  show: {
    opacity: 1,
    y: 0,
  },
};
export default function TopNav({ show }: Props) {
  const scrollY = useScrollY();
  const handleClick = () => {};
  const [scope, animate] = useAnimate();

  return (
    <motion.div
      variants={variants}
      animate={show ? 'show' : 'hide'}
      transition={{ type: 'tween' }}
      className='w-full fixed flex items-center top-0 z-[100] bg-white shadow-md h-16 '>
      <div
        className='w-full max-w-6xl  mx-auto flex justify-between items-center p-2'
        onClick={handleClick}>
        <BlogTitle size='small' />

        <ul className='font-serif flex bg-white gap-5 w-fit px-6 text-uPrimary font-medium'>
          {navList.map((item) => (
            <li className='hover:text-uRed duration-200' key={item.name}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
