import React from 'react';
import MarkdownViewer from '@/components/MarkdownViewer';
import { IPostData } from '@/service/post';

type Props = {
  post: IPostData;
};

export default function PostContent({ post }: Props) {
  const { title, username, date, content, tags, comments } = post;

  return (
    <section className='flex flex-col p-10'>
      <MarkdownViewer content={content} />
    </section>
  );
}
