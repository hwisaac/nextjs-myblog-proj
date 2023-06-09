'use client';
import React from 'react';
import GridSectionBlock from './footer/GridSectionBlock';
import ArticleCard from './ArticleCard';
import { IPost } from '@/service/post';
import usePosts from '@/hooks/usePosts';

type Props = {};

export default function LatestArticlesBlock() {
  const { posts } = usePosts();

  return (
    <GridSectionBlock title='Latest Articles'>
      <div className='w-full flex flex-col justify-between gap-4'>
        {posts?.slice(0, 3).map((post: IPost, index) => (
          <ArticleCard key={`${post.title}-${index}`} post={post} />
        ))}
      </div>
    </GridSectionBlock>
  );
}
