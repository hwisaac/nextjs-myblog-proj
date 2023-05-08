'use client';
import React from 'react';

type Props = {
  text: string;
  hide?: boolean;
};

export default function RedButton({ text, hide = false }: Props) {
  return (
    <button
      className={`bg-uRed text-white py-2 px-6 shadow-md hover:brightness-105 ${
        hide ? 'hidden' : ''
      }`}>
      {text}
    </button>
  );
}
