import { randomTextColor } from '@/utils/randomColor';
import React from 'react';

type Props = { tag: string };
export default function TagCard({ tag }: Props) {
  return (
    <span className='inline-block bg-white shadow-md px-3 py-1'>
      <span className={randomTextColor(tag)}># </span>
      {tag}
    </span>
  );
}
