import Link from 'next/link';
import React from 'react';
import NavMenu from './NavMenu';
import IconChevron from '../icons/IconChevron';

type Props = {};

const menus = [
  {
    name: 'Home',
    href: '/',
    subMenu: [
      { name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', href: '/' },
      { name: 'b', href: '/' },
      { name: 'c', href: '/' },
      { name: 'd', href: '/' },
      { name: 'e', href: '/' },
      { name: 'f', href: '/' },
      { name: 'g', href: '/' },
    ],
  },
  { name: 'Header Styles', href: '/header-styles', subMenu: [] },
  { name: 'Post Features', href: '/posts', subMenu: [] },
  { name: '#Tag', href: '/tag', subMenu: [] },
  { name: 'About', href: '/about', subMenu: [] },
  {
    name: 'Portfolio',
    href: '/portfolio',
    subMenu: [
      { name: 'a', href: '/' },
      { name: 'b', href: '/' },
      { name: 'c', href: '/' },
      { name: 'd', href: '/' },
    ],
  },
  { name: 'Contact', href: '/contact', subMenu: [] },
];

export default function NavBar({}: Props) {
  return (
    <ul className='relative font-serif flex bg-white shadow-md gap-5 w-fit mx-auto px-6  text-uPrimary font-medium'>
      {menus.map((menu) => (
        <NavMenu key={menu.name} menu={menu} />
      ))}
    </ul>
  );
}
