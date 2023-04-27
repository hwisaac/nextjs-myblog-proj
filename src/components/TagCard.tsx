import { randomColor } from '@/utils/randomColor';
import React from 'react';

type Props = { tag: string };
// text-[${randomColor(tag)}]
export default function TagCard({ tag }: Props) {
  return (
    <span className='inline-block bg-white shadow-md px-3 py-1'>
      <span className={`text-[${randomColor(tag)}]`}># </span>
      {tag}
    </span>
  );
}
