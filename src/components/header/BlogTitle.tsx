import React from 'react';

type Props = { size?: 'normal' | 'small' };

export default function BlogTitle({ size = 'normal' }: Props) {
  return (
    <p className={styleBySize(size)}>
      <strong className='text-uRed'>M</strong>aktub
    </p>
  );
}

function styleBySize(size: 'normal' | 'small') {
  if (size === 'small') {
    return 'font-bold text-4xl text-uPrimary';
  }
  return 'font-bold text-6xl text-uPrimary';
}
