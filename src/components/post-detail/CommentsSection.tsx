'use client';
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
        {comments?.map((comment) => (
          <Comment key={comment._key} comment={comment} postId={postId} />
        ))}
      </div>
    </section>
  );
}
