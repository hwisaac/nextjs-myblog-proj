import Link from 'next/link';
import React from 'react';
import NavMenu from './NavMenu';
import IconChevron from '../icons/IconChevron';

type Props = {};

const menus = [
  {
    name: 'Home',
    href: '/',
    subMenu: [],
  },
  {
    name: '#Tags',
    href: '/tags',
    subMenu: [],
  },
  { name: 'About', href: '/about', subMenu: [] },
  { name: 'Contact', href: '/contact', subMenu: [] },
];

export default function NavBar({}: Props) {
  return (
    <ul className='relative font-serif flex bg-white shadow-md gap-5 w-fit mx-auto px-16  text-uPrimary font-medium'>
      {menus.map((menu) => (
        <NavMenu key={menu.name} menu={menu} />
      ))}
    </ul>
  );
}
