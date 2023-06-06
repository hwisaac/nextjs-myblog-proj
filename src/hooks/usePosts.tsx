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

  const { mutate: globalMutate } = useSWRConfig();

  // 서버에 새로운 post 를 업데이트하기
  // tempPost
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
      optimisticData: newPosts, // 즉시 해당 데이터로 업데이트
      populateCache: false, // remote mutate 결과를 캐시에 기록하지 않기
      revalidate: false, // 비동기 데이터가 업데이트돼도 캐시 유효성 검사하지 말기
      rollbackOnError: true, // remote mutate 과정에서 에러가 나면 캐시를 롤백시키기
    }).then(() => globalMutate('/api/posts'));
  };

  return { posts, isLoading, error, createPost };
}

// 서버에 데이터를 보내는 함수
function addPost({ form, tags, file }: TCreatePostInput) {
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