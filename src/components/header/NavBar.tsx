import Link from 'next/link';
import React from 'react';

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

export default function NavBar({}: Props) {
  return (
    <ul className='font-serif flex bg-white shadow-md gap-5 w-fit mx-auto px-6 py-3  text-uPrimary font-medium'>
      {navList.map((item) => (
        <li key={item.name}>
          <Link href={item.href}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}
