import formatCase from '@/utils/formatCase';
import { randomColorBy } from '@/utils/randomColor';
import React from 'react';

type Props = { tag: string };
export default function TagCard({ tag }: Props) {
  const colors = randomColorBy(tag);
  return (
    <span
      className={`inline-block bg-white shadow-md px-3 py-1 text-sm text-uPrimary hover:-translate-y-[2px] transition-all cursor-pointer ${colors.hoverText} ease-out`}>
      <span className={colors.text}># </span>
      {formatCase(tag)}
    </span>
  );
}
