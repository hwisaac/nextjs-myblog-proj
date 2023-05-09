'use client';
import PaginationNav from '@/components/PaginationNav';
import MeWithPortal from '@/components/about/MeWithPortal';
import React, { useState } from 'react';

type Props = {};

const GAP = 'gap-10';
export default function AboutPage({}: Props) {
  const posts = [1, 2, 3, 4];
  const pageLength = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = Math.ceil(posts.length / pageLength);

  return (
    <section className='w-full border flex flex-col gap-16 mb-10'>
      <MeWithPortal />

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
