'use client';
import React from 'react';
import GridSectionBlock from './footer/GridSectionBlock';
import TagCard from './TagCard';
import useSWR from 'swr';
import getAllTags from '@/utils/getAllTags';
import usePosts from '@/hooks/usePosts';

type Props = {};
const TAGS = ['health', 'lifestyle', 'music', 'technology', 'travel', 'video'];

export default function TagCloudBlock({}: Props) {
  const { posts } = usePosts();
  const TAGS = Object.keys(getAllTags(posts));
  return (
    <GridSectionBlock title='Tag Cloud'>
      <div className='w-full space-x-2 space-y-2'>
        {TAGS.map((tag: string) => (
          <TagCard key={tag} tag={tag} />
        ))}
      </div>
    </GridSectionBlock>
  );
}
