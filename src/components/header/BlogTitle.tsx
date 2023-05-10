import Link from 'next/link';
import React from 'react';

type Props = { size?: 'normal' | 'small' };

export default function BlogTitle({ size = 'normal' }: Props) {
  return (
    <Link href='/' className={styleBySize(size)}>
      Maktub
    </Link>
  );
}

function styleBySize(size: 'normal' | 'small') {
  const animation = 'hover:-translate-y-1 transition-all duration-300 ease-out';
  const base = 'font-bold text-uPrimary cursor-pointer first-letter:text-uRed';
  const textSize = size === 'small' ? 'text-4xl' : 'text-6xl';

  return [base, textSize, animation].join(' ');
}
