# nextjs 로 만드는 blog

배포: https://nextjs-myblog-proj.vercel.app/

app/about/page.tsx 백업
```ts
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
      <div className={`w-full grid grid-cols-1 md:grid-cols-2 gap-8`}>
        <ul className={`w-full bg-lime-100 border flex flex-col ${GAP}`}>
          <li className='w-full h-96 bg-sky-400'></li>
          <li className='w-full h-96 bg-sky-400'></li>
          <li className='w-full h-96 bg-sky-400'></li>
        </ul>
        <ul className={`w-full bg-slate-100 border flex flex-col ${GAP}`}>
          <li className='w-full h-[36rem] bg-orange-400'></li>
          <li className='w-full h-[36rem] bg-orange-400'></li>
        </ul>
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

```