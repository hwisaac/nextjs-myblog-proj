import OtherPostsBlock from '@/components/post-detail/OtherPostsBlock';
import PostDetailBlock from '@/components/post-detail/PostDetailBlock';
import { dummyPost } from '@/service/post';
import React from 'react';

type Props = {
  params: { slug: string };
};
export default async function PostDetailPage({ params: { slug } }: Props) {
  return (
    <section className='border'>
      <PostDetailBlock slug={slug} />
      <OtherPostsBlock prevPost={dummyPost} nextPost={dummyPost} />
    </section>
  );
}
