'use client';
import PaginationNav from '@/components/PaginationNav';
import MeWithPortal from '@/components/about/MeWithPortal';
import Portfolios from '@/components/about/Portfolios';
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
      {null && (
        <Portfolios
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          lastPage={lastPage}
        />
      )}
    </section>
  );
}
