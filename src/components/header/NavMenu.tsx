'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import IconChevron from '../icons/IconChevron';
import SubNavMenus from './SubNavMenus';
import { usePathname } from 'next/navigation';
import PingCircle from '../ui/PingCircle';

export interface IMenu {
  name: string;
  href: string;
}
export interface INavMenu extends IMenu {
  subMenu: IMenu[];
}

type Props = {
  menu: INavMenu;
};

export default function NavMenu({ menu: { name, href, subMenu } }: Props) {
  const hasSubMenu = subMenu.length > 0;
  const pathname = usePathname();
  const isActive = href === '/' ? pathname === href : pathname.includes(href);

  return (
    <li className='flex items-center group cursor-pointer h-full py-3 relative'>
      {hasSubMenu ? (
        <>
          <span className='group-hover:text-uRed duration-200'>{name}</span>
          <IconChevron type='down' />
          <SubNavMenus subMenu={subMenu} />
        </>
      ) : (
        <Link
          href={href}
          className='group-hover:text-uRed duration-200 relative left-'>
          {name}
        </Link>
      )}
      {isActive && <PingCircle addClassName='top-[0.6rem] -left-[0.6rem]' />}
    </li>
  );
}
