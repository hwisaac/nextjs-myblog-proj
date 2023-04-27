import React from 'react';

type Props = {
  title: string;
  children?: React.ReactNode;
};

export default function GridSectionBlock({ title, children }: Props) {
  return (
    <div className='w-[300px] h-[380px] py-10'>
      <div className='w-full h-[2px] relative mb-7 bg-uRed'>
        <h2 className='absolute flex text-2xl w-fit left-0 -top-4 bg-uBgColor pr-4 text-uPrimary'>
          {title}
        </h2>
      </div>
      <div className='flex w-full h-full'>{children}</div>
    </div>
  );
}
