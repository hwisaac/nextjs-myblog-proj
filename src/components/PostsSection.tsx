'use client';
import { IPost } from '@/service/post';
import React, { useState } from 'react';
import PaginationNav from './PaginationNav';
import PostCard from './PostCard';
import usePosts from '@/hooks/usePosts';

const PAGE_LENGTH = 4; // 페이지네이션 할때 페이지마다 보여줄 post 갯수

export default function PostsSection() {
  const { posts } = usePosts();

  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = posts ? Math.ceil(posts.length / PAGE_LENGTH) : 0;

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
// posts 목록과 page(숫자) 를 인자로 받아 posts 를 적절히 잘라서 리턴합니다.
const paginate = (posts: IPost[], page: number): IPost[] => {
  if (page < 0 || page >= posts.length) return [];

  const pageLength = PAGE_LENGTH;
  const start = page * pageLength;
  const end = start + pageLength;

  const result = posts.slice(start, end);

  return result;
};
