import React from 'react';

type Props = { title: string; size?: 'normal' | 'large' };

export default function RedLineTitle({ title, size = 'normal' }: Props) {
  return (
    <div className='w-full relative mb-7 flex items-center'>
      <h2 className={h2ClassNameBy(size)}>{title}</h2>
      <div className='flex grow h-[2px] bg-uRed' />
    </div>
  );
}
function h2ClassNameBy(size: string): string {
  const base = `flex text-2xl w-fit text-uPrimary mr-4`;
  const textSize = size === 'normal' ? `text-2xl` : 'text-4xl';
  const bold = size === 'normal' ? `font-semibold` : 'font-black';
  return [base, textSize, bold].join(' ');
}