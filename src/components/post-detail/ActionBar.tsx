'use client';
import { IPostDetail, createPost, deletePost } from '@/service/post';
import React from 'react';

type Props = { post: IPostDetail };

const actionStyle =
  'text-sm text-uFontColor hover:text-uTwitter active:text-uRed cursor-pointer';

export default function ActionBar({ post }: Props) {
  const onDelete = () => {
    fetch(`/api/posts/${post.postId}`, {
      method: 'DELETE',
    }).then(() => console.log('fetch 함수 끝'));
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
