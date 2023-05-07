import React from 'react';
import { IPostData } from '@/service/post';
import CustomMarkdownViewer from './CustomMarkdownViewer';

type Props = {
  post: IPostData;
};

export default function PostContent({ post }: Props) {
  const {
    title,
    author: { username, name, email, image, posts },
    createdAt,
    content,
    tags,
    comments,
  } = post;

  return (
    <section className='flex flex-col p-10 max-w-4xl overflow-hidden'>
      <CustomMarkdownViewer content={content} />
      {/* <MarkdownViewer content={content} /> */}
    </section>
  );
}
