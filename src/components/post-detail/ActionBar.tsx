'use client';
import usePosts from '@/hooks/usePosts';
import { IPostDetail } from '@/service/post';
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = { post?: IPostDetail };

const actionStyle =
  'text-sm text-uFontColor hover:text-uTwitter active:text-uRed cursor-pointer';

export default function ActionBar({ post }: Props) {
  const { removePost } = usePosts();
  const router = useRouter();
  if (!post) return null;

  const onDelete = () => {
    removePost(post.postId);
    router.push('/');
  };

  return (
    <section className='flex justify-end gap-4 px-10 pb-4'>
      <span onClick={onDelete} className={actionStyle}>
        Delete
      </span>
      <span className={actionStyle}>Edit</span>
    </section>
  );
}
