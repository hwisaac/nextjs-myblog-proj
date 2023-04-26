import React from 'react';

type Props = {
  title: string;
  children?: React.ReactNode;
};

export default function GridSectionBlock({ title, children }: Props) {
  return (
    <div className='border w-72 h-[430px] py-10'>
      <div className='w-full h-[2px] relative bg-uRed mb-7'>
        <h2 className='absolute flex text-2xl w-fit left-0 -top-4 bg-uBgColor pr-4 text-uPrimary'>
          {title}
        </h2>
      </div>
      <div className='w-full h-full bg-red-300/10'>{children}</div>
    </div>
  );
}
