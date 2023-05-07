import React from 'react';
import RedLineTitle from '../ui/RedLineTitle';

type Props = {
  title: string;
  children?: React.ReactNode;
};

export default function GridSectionBlock({ title, children }: Props) {
  return (
    <div className='w-full basis-[300px] h-fit py-10 mx-auto px-3'>
      <RedLineTitle title={title} />
      <div className='flex w-full h-full'>{children}</div>
    </div>
  );
}
