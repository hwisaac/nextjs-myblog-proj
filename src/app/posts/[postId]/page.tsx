import OtherPostsBlock from '@/components/post-detail/OtherPostsBlock';
import PostDetailBlock from '@/components/post-detail/PostDetailBlock';
import { dummyPost } from '@/service/post';
import React from 'react';

type Props = {
  params: { postId: string };
};
export default async function PostDetailPage({ params: { postId } }: Props) {
  return (
    <section className='border'>
      <PostDetailBlock postId={postId} />
      <OtherPostsBlock prevPost={dummyPost} nextPost={dummyPost} />
    </section>
  );
}
