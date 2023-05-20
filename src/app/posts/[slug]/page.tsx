import CategorySection from '@/components/post-detail/CategorySection';
import CommentsArticle from '@/components/post-detail/CommentsArticle';
import CoverImage from '@/components/post-detail/CoverImage';
import OtherPostsBlock from '@/components/post-detail/OtherPostsBlock';
import PostContent from '@/components/post-detail/PostContent';
import PostHead from '@/components/post-detail/PostHead';
import { IPostDetail, dummyPost, getPostDetail } from '@/service/post';
import React from 'react';
import useSWR from 'swr';
type Props = {
  params: { slug: string };
};
const testSlug = 'typeorm-getting-started';
const fetcher = async (slug: string): Promise<IPostDetail> => {
  return await getPostDetail('hwisaac0@gmail.com', slug);
};
export default async function PostDetailPage({ params: { slug } }: Props) {
  const post = await getPostDetail('hwisaac0@gmail.com', slug);

  // const post = await fetch(`/api/posts/nextjs-font-최적화`).then((res) =>
  //   res.json()
  // );
  // console.log('slug 페이지에서 post : ', post);
  // const {
  //   data: post,
  //   isLoading,
  //   error,
  // } = useSWR<IPostDetail>(`/api/posts/${slug}`, () => fetcher(slug));
  // console.log('useSWR data: ', data);
  // console.log(post);

  // const {
  //   author: { name, email, image },
  //   title,
  //   thumbnail,
  //   tags,
  //   postId,
  //   createdAt,
  //   updatedAt,
  //   content,
  //   commentsLength,
  // } = post;

  return (
    <section className='border'>
      {post && (
        <>
          <article className='overflow-hidden bg-white shadow-lg m-4'>
            <CoverImage image={post.postImage} />
            <PostHead
              title={post.title}
              createdAt={post.createdAt}
              commentsLength={post.comments.length || 0}
            />
            <PostContent post={post} />
            <CategorySection tags={post.tags} />
          </article>
          <CommentsArticle comments={post.comments} />
          <OtherPostsBlock prevPost={dummyPost} nextPost={dummyPost} />
        </>
      )}
    </section>
  );
}
