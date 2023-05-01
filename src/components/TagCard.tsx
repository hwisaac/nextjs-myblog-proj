import formatCase from '@/utils/formatCase';
import { randomTextColor } from '@/utils/randomColor';
import React from 'react';

type Props = { tag: string };
export default function TagCard({ tag }: Props) {
  return (
    <span className='inline-block bg-white shadow-md px-3 py-1 text-uPrimary'>
      <span className={randomTextColor(tag)}># </span>
      {formatCase(tag)}
    </span>
  );
}
