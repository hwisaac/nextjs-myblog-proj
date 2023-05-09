'use client';
import { IPost } from '@/service/post';
import React, { useState } from 'react';
import PaginationNav from './PaginationNav';
import PostCard from './PostCard';

type Props = { posts: IPost[] };
export default function PostsSection({ posts }: Props) {
  const pageLength = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = Math.ceil(posts.length / pageLength);

  const slicedPosts = paginate(posts, currentPage - 1);

  return (
    <>
      {slicedPosts.map((post) => (
        <PostCard key={post.title} post={post} />
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
