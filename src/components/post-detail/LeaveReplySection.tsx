'use client';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import RedLineTitle from '../ui/RedLineTitle';
import RedButton from '../ui/RedButton';
import usePost from '@/hooks/usePost';

type Props = {
  postId: string;
};

export type CommentData = {
  content: string;
  name: string;
  password: string;
};

const DEFAULT_DATA = {
  content: '',
  name: '',
  password: '',
};

export default function LeaveReplySection({ postId }: Props) {
  const { addComment } = usePost(postId);

  const [commentData, setCommentData] = useState<CommentData>(DEFAULT_DATA);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCommentData((prev) => ({ ...prev, [name]: value }));
  };

  const onComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addComment(commentData);
    setCommentData((prev) => ({ ...prev, content: '' })); 
  };

  return (
    <section className='px-10'>
      <RedLineTitle title='Leave a Reply' />
      <form className='grid grid-cols-2 grid-rows-[auto_1fr_1fr] gap-3 text-uFontColor'>
        <textarea
          rows={3}
          className='bg-uBgColor border-fuchsia-200 border w-full  col-span-2 p-4 resize-none outline-uRed'
          placeholder='Comment'
          value={commentData.content}
          name='content'
          onChange={onChange}
        />
        <input
          type='text'
          className='bg-uBgColor border-fuchsia-200 border w-full h-10 px-4 outline-uRed'
          placeholder='Name'
          value={commentData.name}
          name='name'
          onChange={onChange}
        />
        <input
          type='password'
          className='bg-uBgColor border-fuchsia-200 border w-full h-10 px-4 outline-1 outline-uRed'
          placeholder='password'
          value={commentData.password}
          name='password'
          onChange={onChange}
        />
      </form>

      <div className='pt-10 flex justify-end'>
        <RedButton text='Post Comment' onClick={onComment} />
      </div>
    </section>
  );
}
