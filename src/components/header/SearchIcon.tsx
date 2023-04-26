import React from 'react';
import { BiSearch } from 'react-icons/bi';

type Props = {};

export default function SearchIcon({}: Props) {
  return (
    <div className='absolute right-0'>
      <BiSearch className='border text-md text-white bg-uRed rounded-full p-3 box-content shadow-sm' />
    </div>
  );
}
