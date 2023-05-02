import React from 'react';
import PaginationBtn from './ui/PaginationBtn';

type Props = {
  onNext: () => void;
  onPrev: () => void;
  currentPage: number;
  lastPage: number;
};

export default function PaginationNav({
  onNext,
  onPrev,
  currentPage,
  lastPage,
}: Props) {
  return (
    <div className='flex gap-3 items-center mx-auto'>
      <PaginationBtn text='Prev' onClick={onPrev} hide={currentPage <= 1} />
      <span className='text-gray-400 font-serif mx-4'>
        Page {currentPage} of {lastPage}
      </span>
      <PaginationBtn
        text='Next'
        onClick={onNext}
        hide={currentPage >= lastPage}
      />
    </div>
  );
}
