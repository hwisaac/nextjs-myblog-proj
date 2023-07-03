import React from 'react';
import PaginationNav from '../PaginationNav';

type Props = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  lastPage: number;
};

export default function Portfolios({
  setCurrentPage,
  currentPage,
  lastPage,
}: Props) {
  return (
    <section>
      <div
        className={`w-full grid grid-cols-2 grid-rows-[auto_auto_auto_auto] gap-x-6 gap-y-10 border bg-gray-200 box-content h-fit`}>
        <div className='w-full h-52 bg-green-400 border-uTwitter box-content'>
          1
        </div>
        <div className='w-full h-52 bg-uRed border-uTwitter row-span-2'>2</div>
        <div className='w-full h-52 bg-uRed border-uTwitter row-span-2'>3</div>
        <div className='w-full h-52 bg-uRed border-uTwitter row-span-2'>4</div>
        <div className='w-full h-52 bg-uRed border-uTwitter'>5</div>
      </div>
      <PaginationNav
        onNext={() => setCurrentPage((page) => page + 1)}
        onPrev={() => setCurrentPage((page) => page - 1)}
        currentPage={currentPage}
        lastPage={lastPage}
      />
    </section>
  );
}
