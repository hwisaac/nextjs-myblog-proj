import React from 'react';
import CustomMarkdownViewer from './CustomMarkdownViewer';
import { IPostDetail } from '@/service/post';

type Props = {
  post?: IPostDetail;
};

export default function PostContent({ post }: Props) {
  if (!post) return null;

  const { content } = post;
  return (
    <section className='flex flex-col p-10 max-w-4xl overflow-hidden'>
      <CustomMarkdownViewer content={content} />
    </section>
  );
}
