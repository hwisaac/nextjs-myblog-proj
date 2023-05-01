'use client';
import useScrollY from '@/hooks/useScrollY';
import React from 'react';
import BlogTitle from './BlogTitle';
import Link from 'next/link';

type Props = {};

const navList = [
  { name: 'Home', href: '/', subnav: [] },
  { name: 'Header Styles', href: '/header-styles', subnav: [] },
  { name: 'Post Features', href: '/posts', subnav: [] },
  { name: '#Tag', href: '/tag', subnav: [] },
  { name: 'About', href: '/about', subnav: [] },
  { name: 'Portfolio', href: '/portfolio', subnav: [] },
  { name: 'Contact', href: '/contact', subnav: [] },
];

export default function TopNav({}: Props) {
  const scrollY = useScrollY();
  const handleClick = () => {};
  return (
    <div className='w-full fixed top-0 z-50 bg-white shadow-md'>
      {scrollY > 400 && (
        <div
          className='w-full max-w-6xl  mx-auto flex justify-between items-center py-2'
          onClick={handleClick}>
          <BlogTitle size='small' />

          <ul className='font-serif flex bg-white gap-5 w-fit px-6 py-3  text-uPrimary font-medium'>
            {navList.map((item) => (
              <li className='hover:text-uRed duration-200' key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
