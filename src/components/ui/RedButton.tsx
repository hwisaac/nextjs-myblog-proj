'use client';
import React from 'react';

type Props = {
  text: string;
  hide?: boolean;
  onClick?: any;
  addClassName?: string;
};

export default function RedButton({
  text,
  hide = false,
  onClick = () => undefined,
  addClassName,
}: Props) {
  return (
    <button
      className={`bg-uRed text-white py-2 px-6 shadow-md hover:brightness-105 ${
        hide ? 'hidden' : ''
      } ${addClassName}
      `}
      onClick={onClick}>
      {text}
    </button>
  );
}
