import React from 'react';
import { IMenu } from './NavMenu';
import Link from 'next/link';

type Props = {
  subMenu: IMenu[];
};

export default function SubNavMenus({ subMenu }: Props) {
  return (
    <ul
      className={`z-50 flex flex-col absolute top-[100%] border border-gray-50 shadow-sm bg-white h-fit w-fit min-w-[120px] py-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity`}>
      {subMenu.map(({ name, href }) => (
        <li key={name}>
          <Link
            className='px-6 py-2 font-serif cursor-pointer hover:text-uRed duration-200 flex w-full h-full'
            href={href}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
