'use client';
import React from 'react';
import CommentsArticle from './CommentsArticle';
import ActionBar from './ActionBar';
import CategorySection from './CategorySection';
import PostContent from './PostContent';
import PostHead from './PostHead';
import CoverImage from './CoverImage';
import usePost from '@/hooks/usePost';

type Props = {
  postId: string;
};

export default function PostDetailBlock({ postId }: Props) {
  const { post } = usePost(postId);

  return (
    <>
      <article className='overflow-hidden bg-white shadow-lg m-4'>
        <CoverImage image={post?.postImage} />
        <PostHead
          title={post?.title}
          createdAt={post?.createdAt}
          commentsLength={post?.comments?.length || 0}
        />
        <PostContent post={post} />
        <CategorySection tags={post?.tags} />
        <ActionBar post={post} />
      </article>
      <CommentsArticle postId={post?.postId || ''} />
    </>
  );
}
