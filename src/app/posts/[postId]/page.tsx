import OtherPostsBlock from '@/components/post-detail/OtherPostsBlock';
import PostDetailBlock from '@/components/post-detail/PostDetailBlock';
import { IPost } from '@/service/post';
import React from 'react';

const dummyPost: IPost = {
  title: 'Top 10 old rock songs from the 80’s',
  slug: 'slug-test',
  postImage: '',
  description:
    'Music is an art form and cultural activity whose medium is sound organized in time. General definitions of music include common elements such as pitch (which governs melody and harmony), rhythm (and its associated concepts tempo, meter, and articulation), dynamics…',
  tags: ['lifestyle', 'music'],
  postId: 'post07',
  createdAt: 'June 25, 2019',
  updatedAt: 'July 26, 2019',
  commentsLength: 3,
}; 
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
