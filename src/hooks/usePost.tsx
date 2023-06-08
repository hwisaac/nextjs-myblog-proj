import { IPostDetail } from '@/service/post';
import useSWR, { useSWRConfig } from 'swr';
import { ScopedMutator } from 'swr/_internal';

export default function usePost(postId: string) {
  const urlKey = `/api/posts/${postId}`;
  const { mutate: globalMutate } = useSWRConfig();
  const { data: post, isLoading, error, mutate } = useSWR<IPostDetail>(urlKey);

  return { post, mutate, isLoading, error, comments: post?.comments };
}
