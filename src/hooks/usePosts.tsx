import { IPost } from '@/service/post';
import createSlug from '@/utils/createSlug';
import extractDescription from '@/utils/extractDescription';
import useSWR from 'swr';

export type TCreatePostParam = {
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

  // 서버에 새로운 post 를 업데이트하기 + 임시데이터로 ui 즉각 업데이트
  const updatePost = ({ form, tags = [], file }: TCreatePostParam) => {
    const { title, content } = form;
    const tempPostId = `temp-${new Date().getTime()}`;

    if (!posts) return console.log('posts 가 없습니다!');

    // 임시 데이터 tempPost
    const tempPost: IPost = {
      title: `${title}(임시)`,
      slug: createSlug(title),
      postImage: file ? URL.createObjectURL(file) : '',
      description: extractDescription(content, 150),
      tags,
      postId: tempPostId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      commentsLength: 0,
    };

    // 임시 posts 목록
    const tempPosts: IPost[] = [tempPost, ...posts];

    // postNewData 함수[remote mutate]로 서버에 데이터 보내기
    // optimisticData 옵션으로 즉각 ui업데이트
    mutate(postNewData({ form, tags, file }), {
      optimisticData: tempPosts,
      populateCache: false, // remote mutate 리턴값을를 캐시에 기록할지 여부
      revalidate: true, // 비동기 데이터가 업데이트되면, 서버에 GET 요청해서 진짜 데이터로 업데이트
      rollbackOnError: true, // remote mutate 과정에서 에러가 나면 캐시를 롤백시킬지
    });
    return;
  };

  return { posts, isLoading, error, updatePost };
}

// 서버에 데이터를 보내는 함수
function postNewData({ form, tags, file }: TCreatePostParam) {
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
