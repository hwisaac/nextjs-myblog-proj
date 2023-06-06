import { IPost } from '@/service/post';
import createSlug from '@/utils/createSlug';
import extractDescription from '@/utils/extractDescription';
import React from 'react';
import useSWR, { useSWRConfig } from 'swr';

type TCreatePostInput = {
  form: {
    title: string;
    content: string;
  };
  posts?: IPost[];
  tags?: string[];
  file?: File;
};

export default function usePosts() {
  const {
    data: posts,
    isLoading,
    error,
    mutate,
  } = useSWR<IPost[]>('/api/posts');

  // const { mutate: globalMutate } = useSWRConfig();

  const createPost = async ({ form, tags = [], file }: TCreatePostInput) => {
    const { title, content } = form;

    if (!posts) return console.log('posts 가 없습니다!');

    const tempPost: IPost = {
      title,
      slug: '',
      postImage: null,
      description: extractDescription(content, 150),
      tags,
      postId: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      commentsLength: 0,
    };

    const newPosts: IPost[] = [tempPost, ...posts];

    console.log('newPosts > ', newPosts);

    return mutate(addPost({ form, tags, file }), {
      optimisticData: newPosts,
      populateCache: false,
      revalidate: false,
      rollbackOnError: true,
    });
  };

  return { posts, isLoading, error, createPost };
}

function addPost({ form, tags = [], file }: TCreatePostInput) {
  const { title, content } = form;
  const formData = new FormData();
  if (!file) throw Error('file 이 없습니다.');

  formData.append('file', file);
  formData.append('postData', JSON.stringify({ title, content, tags }));

  return fetch('/api/posts', {
    method: 'POST',
    body: formData,
  }).then((res) => res.json());
}