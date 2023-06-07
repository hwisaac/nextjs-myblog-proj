import { IPostDetail } from '@/service/post';
import React from 'react';
import useSWR, { useSWRConfig } from 'swr';

export default function usePost(slug: string) {
  const key = `/api/posts/${slug}`;
  const { cache, mutate } = useSWRConfig();
  let post = cache.get(key)?.data;
  if (!post) {
    console.log('post가 없음', post);
  }
  // const {
  //   data: post,
  //   isLoading,
  //   error,
  //   mutate,
  // } = useSWR<IPostDetail>(`/api/posts/${slug}`);

  return { post, mutate };
}
