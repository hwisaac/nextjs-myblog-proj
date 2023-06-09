'use client';
import { IComment } from '@/service/post';
import React from 'react';
import RedLineTitle from '../ui/RedLineTitle';
import Comment from './Comment';
import usePost from '@/hooks/usePost';

type Props = { postId: string };

export default function CommentsSection({ postId }: Props) {
  const { comments } = usePost(postId);

  if (!comments || comments.length === 0) return null;

  return (
    <section className='pb-16 px-10 '>
      <RedLineTitle title={'Comments'} />
      <div className='divide-y divide-dashed'>
        {comments?.map((comment, index) => (
          <Comment key={`comment-${index}`} comment={comment} postId={postId} />
        ))}
      </div>
    </section>
  );
}
