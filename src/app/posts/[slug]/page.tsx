import PostContent from '@/components/PostContent';
import { getPostData } from '@/service/post';
import React from 'react';

type Props = {
  params: { slug: string };
};
export default async function test({ params: { slug } }: Props) {
  const post = await getPostData(slug);

  return (
    <article className='overflow-hidden bg-white shadow-lg m-4'>
      <PostContent post={post} />
    </article>
  );
}
