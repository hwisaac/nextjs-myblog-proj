'use client';
import React, { useEffect } from 'react';
import OtherPostsBlock from './OtherPostsBlock';
import CommentsArticle from './CommentsArticle';
import ActionBar from './ActionBar';
import CategorySection from './CategorySection';
import PostContent from './PostContent';
import PostHead from './PostHead';
import CoverImage from './CoverImage';
import useSWR from 'swr';
import usePost from '@/hooks/usePost';

type Props = {
  postId: string;
};

export default function PostDetailBlock({ postId }: Props) {
  const { post } = usePost(postId);

  useEffect(() => {
    console.log(`postDetai에서 post(${postId}) : `, post);
  }, [post, postId]);

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
