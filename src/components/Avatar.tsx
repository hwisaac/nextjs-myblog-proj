import React from 'react';
import IconTwitter from './icons/IconTwitter';
import IconFacebook from './icons/IconFacebook';

type Props = {};

export default function Avatar({}: Props) {
  return (
    <div className='h-full'>
      <div className='flex px-2 gap-5 mt-10 mb-6 items-center'>
        <div className='border rounded-full w-[70px] h-[70px] bg-gray-200'></div>
        <div className='flex flex-col '>
          <h3 className='font-semibold text-uPrimary text-lg'>황이삭</h3>
          <span className='font-serif text-sm text-neutral-500'>
            FE Developer
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
        안녕하세요. 프론트엔드 개발자입니다.
      </p>
    </div>
  );
}
