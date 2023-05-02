import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  text: 'Prev' | 'Next';
  onClick: () => void;
  hide?: boolean;
};

export default function PaginationBtn({ text, onClick, hide = false }: Props) {
  return (
    <button
      className={`bg-uRed text-white py-1 px-3 shadow-md ${
        hide ? 'hidden' : ''
      }`}
      onClick={onClick}>
      {text}
    </button>
  );
}
