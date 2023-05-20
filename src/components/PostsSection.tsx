'use client';
import { IPost, getAllPostsOf } from '@/service/post';
import React, { useState } from 'react';
import PaginationNav from './PaginationNav';
import PostCard from './PostCard';
import useSWR from 'swr';

type Props = {};
export default function PostsSection({}: Props) {
  const { data: posts } = useSWR<IPost[]>('/api/posts');
  console.log(posts);

  const pageLength = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = posts ? Math.ceil(posts.length / pageLength) : 0;

  const slicedPosts = posts ? paginate(posts, currentPage - 1) : [];

  return (
    <>
      {slicedPosts.map((post, index) => (
        <PostCard key={`${post.title}-${index}`} post={post} />
      ))}
      <PaginationNav
        onNext={() => setCurrentPage((page) => page + 1)}
        onPrev={() => setCurrentPage((page) => page - 1)}
        currentPage={currentPage}
        lastPage={lastPage}
      />
    </>
  );
}
const paginate = (posts: IPost[], page: number): IPost[] => {
  if (page < 0 || page >= posts.length) return [];

  const pageLength = 3;
  const start = page * pageLength;
  const end = start + pageLength;

  const result = posts.slice(start, end);

  return result;
};
