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
            <span className='text-uPrimary font-bold text-2xl'>황이삭</span>
            <span className='text-uFontColor text-sm'>FE Developer</span>
          </div>
        </div>
        <p className='text-uFontColor max-w-md text-center'>
          안녕하세요. 프론트엔드 개발자 황이삭입니다.
        </p>
        <div className='flex items-center gap-4 '>
          <IconTwitter className='text-uTwitter' />
          <IconFacebook className='text-uFacebook' />
        </div>
      </div>
    </PortalKV>
  );
}
