'use client';
import React from 'react';
import IconTwitter from '../icons/IconTwitter';
import IconFacebook from '../icons/IconFacebook';
import PortalKV from '../PortalKV';

type Props = {};

export default function MeWithPortal({}: Props) {
  return (
    <PortalKV>
      <div className='flex flex-col items-center justify-center bg-white py-10 gap-5 shadow-md mb-20'>
        <div className='flex items-center gap-4 '>
          <div
            className='w-16 h-16 bg-gray-200 rounded-full'
            id='my-profile-image'></div>
          <div className='flex flex-col gap-1 items-center'>
            <span className='text-uPrimary font-bold text-2xl'>
              Jonathan Doe
            </span>
            <span className='text-uFontColor text-sm'>
              Collbaroator & Editor
            </span>
          </div>
        </div>
        <p className='font-serif text-uFontColor max-w-md text-center'>
          Hello! My name is Jonathan Doe working from Chile. I create some Ghost
          and Wordpress themes for differents markets, also, i offer live
          support via our ticket system.
        </p>
        <div className='flex items-center gap-4 '>
          <IconTwitter className='text-uTwitter' />
          <IconFacebook className='text-uFacebook' />
        </div>
      </div>
    </PortalKV>
  );
}
