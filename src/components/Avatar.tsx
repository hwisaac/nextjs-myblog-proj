import React from 'react';
import IconTwitter from './icons/IconTwitter';
import IconFacebook from './icons/IconFacebook';

type Props = {};

export default function Avatar({}: Props) {
  return (
    <div className='border h-full'>
      <div className='flex px-2 gap-5 border mt-10 mb-6 items-center'>
        <div className='border rounded-full w-[70px] h-[70px] bg-gray-200'></div>
        <div className='flex flex-col '>
          <h3 className='font-semibold text-uPrimary text-lg'>Jonathan Doe</h3>
          <span className='font-serif text-sm text-neutral-500'>
            Founder & Editor
          </span>
          <ul className='flex mt-3 gap-4'>
            <li className='text-uTwitter'>
              <IconTwitter />
            </li>
            <li className='text-uFacebook'>
              <IconFacebook />
            </li>
          </ul>
        </div>
      </div>
      <p className='text-gray-500 font-serif text-sm w-[90%] mx-auto leading-7'>
        Hello! My name is Jonathan Doe working from Chile. I create some Ghost
        and Wordpress themes for differents markets, also, i offer live support
        via our ticket system.
      </p>
    </div>
  );
}
