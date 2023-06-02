import { IPost } from '@/service/post';
import React from 'react';
import useSWR, { useSWRConfig } from 'swr';

type TCreatePostInput = {
  form: {
    title: string;
    content: string;
  };
  tags?: string[];
  file?: File;
};

export default function usePosts() {
  const {
    data: posts,
    isLoading,
    error,
    // mutate,
  } = useSWR<IPost[]>('api/posts');
  const { mutate } = useSWRConfig();
  const createPost = async ({
    form: { title, content },
    tags = [],
    file,
  }: TCreatePostInput) => {
    const formData = new FormData();
    if (!file) throw Error('file 이 없습니다.');

    formData.append('file', file);
    formData.append('postData', JSON.stringify({ title, content, tags }));

    return fetch('/api/posts', {
      method: 'POST',
      body: formData,
    })
      .then(() => mutate('/api/posts'))
      .catch((err) => console.error(err));
  };

  return { posts, isLoading, error, createPost };
}
