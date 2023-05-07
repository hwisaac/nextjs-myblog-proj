import CategorySection from '@/components/post-detail/CategorySection';
import CommentsArticle from '@/components/post-detail/CommentsArticle';
import CoverImage from '@/components/post-detail/CoverImage';
import OtherPostsBlock from '@/components/post-detail/OtherPostsBlock';
import PostContent from '@/components/post-detail/PostContent';
import PostHead from '@/components/post-detail/PostHead';
import { dummyPost, getPostData } from '@/service/post';
import React from 'react';

type Props = {
  params: { slug: string };
};
export default async function test({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const {
    author: { username, name, email, image, posts },
    title,
    createdAt,
    content,
    tags,
    comments,
    description,
  } = post;

  // const post = await getNicoPostData(slug);
  return (
    <section className='border'>
      <article className='overflow-hidden bg-white shadow-lg m-4'>
        <CoverImage image={image} />
        <PostHead
          title={title}
          createdAt={createdAt}
          commentsLength={comments.length || 0}
        />
        <PostContent post={post} />
        <CategorySection tags={tags} />
      </article>
      <CommentsArticle comments={comments} />
      <OtherPostsBlock prevPost={dummyPost} nextPost={dummyPost} />
    </section>
  );
}
