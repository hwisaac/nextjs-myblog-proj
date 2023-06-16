import OtherPostsBlock from '@/components/post-detail/OtherPostsBlock';
import PostDetailBlock from '@/components/post-detail/PostDetailBlock';
import React from 'react';

type Props = {
  params: { postId: string };
};
export default async function PostDetailPage({ params: { postId } }: Props) {
  return (
    <section className='border'>
      <PostDetailBlock postId={postId} />
      <OtherPostsBlock postId={postId} />
    </section>
  );
}
