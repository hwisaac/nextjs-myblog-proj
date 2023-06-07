import { IPostDetail } from '@/service/post';
import useSWR, { useSWRConfig } from 'swr';
import { ScopedMutator } from 'swr/_internal';

type UsePost = {
  post: IPostDetail | undefined;
  mutate: ScopedMutator<any>;
  isLoading: boolean;
  error: any;
};
export default function usePost(slug: string): UsePost {
  const urlKey = `/api/posts/${slug}`;
  const { mutate } = useSWRConfig();
  const { data: post, isLoading, error } = useSWR<IPostDetail>(urlKey);

  return { post, mutate, isLoading, error };
}
