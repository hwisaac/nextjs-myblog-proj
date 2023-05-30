'use client';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import RedLineTitle from '../ui/RedLineTitle';
import RedButton from '../ui/RedButton';

type Props = {
  postId: string;
};

type PostData = {
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
  const [postData, setPostData] = useState<PostData>(DEFAULT_DATA);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  const onComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(`/api/posts/${postId}/comments`, {
      method: 'POST',
      body: JSON.stringify({ postId, postData }),
    })
      .then((res) => console.log('패칭끝: res>>', res))
      .catch((err) => console.error('에러발생', err));
  };

  return (
    <section className='px-10'>
      <RedLineTitle title='Leave a Reply' />
      <form className='grid grid-cols-2 grid-rows-[auto_1fr_1fr] gap-3 text-uFontColor'>
        <textarea
          rows={3}
          className='bg-uBgColor border-fuchsia-200 border w-full  col-span-2 p-4 resize-none outline-uRed'
          placeholder='Comment'
          value={postData.content}
          name='content'
          onChange={onChange}
        />
        <input
          type='text'
          className='bg-uBgColor border-fuchsia-200 border w-full h-10 px-4 outline-uRed'
          placeholder='Name'
          value={postData.name}
          name='name'
          onChange={onChange}
        />
        <input
          type='password'
          className='bg-uBgColor border-fuchsia-200 border w-full h-10 px-4 outline-1 outline-uRed'
          placeholder='password'
          value={postData.password}
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
