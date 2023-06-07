import { IPost } from '@/service/post';
import createSlug from '@/utils/createSlug';
import extractDescription from '@/utils/extractDescription';
import useSWR, { useSWRConfig } from 'swr';

type TCreatePostParam = {
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
  const createPost = async ({ form, tags = [], file }: TCreatePostParam) => {
    const { title, content } = form;

    if (!posts) return console.log('posts 가 없습니다!');

    // 임시 데이터 tempPost
    const tempPost: IPost = {
      title,
      slug: `${createSlug(title)}-${new Date().getTime()}`,
      postImage: null,
      description: extractDescription(content, 150),
      tags,
      postId: `temp-${new Date().getTime()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      commentsLength: 0,
    };
    // posts 목록
    const newPosts: IPost[] = [tempPost, ...posts];

    // addPost 함수[remote mutate]로 서버에 데이터 보내기 + ui 즉각 업데이트
    return mutate(addPost({ form, tags, file }), {
      optimisticData: newPosts, // 데이터보낸 동안 즉시 가짜데이터로 ui를 업데이트
      populateCache: false, // remote mutate 리턴값을를 캐시에 기록하지 않기.
      revalidate: false, // 비동기 데이터가 업데이트돼도 캐시 유효성 검사하지 말기(=내가 만든 데이터를 믿는다)
      rollbackOnError: true, // remote mutate 과정에서 에러가 나면 캐시를 롤백시키기
    }).then(() => globalMutate('/api/posts')); // 서버상 posts를 refetch해서 캐시 업데이트하기
  };

  return { posts, isLoading, error, createPost };
}

// 서버에 데이터를 보내는 함수
function addPost({ form, tags, file }: TCreatePostParam) {
  const { title, content } = form;
  const formData = new FormData();
  if (!file) throw Error('file 이 없습니다.');

  formData.append('file', file);
  formData.append('postData', JSON.stringify({ title, content, tags }));

  return fetch('/api/posts', {
    method: 'POST',
    body: formData,
  }).then(async (res) => {
    const x = await res.json();
    console.log(x);
    return x;
  });
}