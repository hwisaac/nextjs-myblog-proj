'use client';
import React from 'react';
import RedLineTitle from '../ui/RedLineTitle';
import OtherPostCard from './OtherPostCard';
import usePosts from '@/hooks/usePosts';
import getOtherPosts from '@/utils/getOtherPosts';

type Props = {
  postId: string;
};

export default function OtherPostsBlock({ postId }: Props) {
  const { posts } = usePosts();
  if (!posts) return null;

  const [prevPost, nextPost] = getOtherPosts(postId, posts);

  return (
    <section className='flex flex-col w-full max-w-4xl mx-4 py-20'>
      <RedLineTitle title='Other Posts' size='large' />
      <div className='flex justify-between'>
        <OtherPostCard post={prevPost} type='prev' />
        <OtherPostCard post={nextPost} type='next' />
      </div>
    </section>
  );
}
