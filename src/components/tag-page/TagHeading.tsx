'use client';
import useSWR from 'swr';
import React, { useEffect, useState } from 'react';
import getAllTags from '@/utils/getAllTags';
import TagCard from '../TagCard';
import { IPost } from '@/service/post';
import getPostsByTag from '@/utils/getPostsByTag';
import usePosts from '@/hooks/usePosts';

type Props = {
  setSelectedPosts: React.Dispatch<React.SetStateAction<IPost[]>>;
  tagParam?: string;
};

export default function TagHeading({ setSelectedPosts, tagParam = '' }: Props) {
  const { posts } = usePosts();
  const allTags = getAllTags(posts);
  const numOfArticles = allTags[tagParam];
  const TAGS = Object.keys(allTags);
  const [selected, setSelected] = useState<string>(tagParam);

  useEffect(() => {
    setSelectedPosts([...getPostsByTag(selected, posts)]);
  }, [selected, posts, setSelectedPosts]);

  return (
    <div className='bg-white shadow-md flex items-center p-20 justify-between gap-20 text-uFontColor'>
      <div className='w-1/3 flex flex-col items-center relative'>
        <span className='absolute top-1/2 -translate-y-1/2  text-[12rem] text-gray-400/20'>
          {numOfArticles}
        </span>
        <h1 className='text-4xl font-semibold text-uPrimary'>
          <em className='text-sky-400 inline'>#</em> {tagParam}
        </h1>
        <span>
          {' '}
          {!numOfArticles
            ? null
            : numOfArticles === 1
            ? `${numOfArticles} - Article`
            : `${numOfArticles} - Articles`}
        </span>
      </div>
      <div className='space-x-2 space-y-2'>
        {TAGS.map((tag: string) => (
          <TagCard key={tag} tag={tag} />
        ))}
      </div>
    </div>
  );
}
