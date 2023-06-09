import { CommentData } from '@/components/post-detail/LeaveReplySection';
import { IPostDetail } from '@/service/post';
import useSWR from 'swr';

export default function usePost(postId: string) {
  const urlKey = `/api/posts/${postId}`;
  const { data: post, isLoading, error, mutate } = useSWR<IPostDetail>(urlKey);

  /** ui 즉각 업데이트 & 서버에 post */
  const addComment = (commentData: CommentData) => {
    if (!post) return console.log(`postDetail 이 없습니다(${postId}, ${post})`);

    const createdAt = new Date().toISOString();
    const { content, name, password } = commentData;

    const newComment = {
      content: content + '(임시)',
      name,
      password,
      _key: `temp-${createdAt}`,
      createdAt,
    };

    mutate(postComment(postId, commentData), {
      optimisticData: {
        ...post,
        comments: [...post.comments, newComment],
      }, // 데이터보낸 동안 즉시 새로운 post 데이터로 ui를 업데이트
      populateCache: false, // remote mutate 리턴값을를 캐시에 기록할지 여부
      revalidate: true, // 비동기 데이터가 업데이트되고 캐시 유효성 검사할지 여부
      rollbackOnError: true, // remote mutate 과정에서 에러가 나면 캐시를 롤백시킬지
    });
    return;
  };

  const removeComment = (_key: string) => {
    if (!post) return console.log(`postDetail 이 없습니다(${postId}, ${post})`);

    mutate(deleteComment(postId, _key), {
      optimisticData: {
        ...post,
        comments: post.comments.filter((comment) => comment._key !== _key),
      }, // 데이터보낸 동안 즉시 새로운 post 데이터로 ui를 업데이트
      populateCache: false, // remote mutate 리턴값을를 캐시에 기록할지 여부
      revalidate: false, // 비동기 데이터가 업데이트되고 캐시 유효성 검사할지 여부
      rollbackOnError: true, // remote mutate 과정에서 에러가 나면 캐시를 롤백시킬지
    });
    return;
  };

  return {
    post,
    isLoading,
    error,
    comments: post?.comments,
    addComment,
    removeComment,
  };
}

// 서버에 commentData 를 POST
function postComment(postId: string, commentData: CommentData) {
  return fetch(`/api/posts/${postId}/comments`, {
    method: 'POST',
    body: JSON.stringify({ postId, commentData }),
  }).then((res) => res.json());
}

function deleteComment(postId: string, _key: string) {
  return fetch(`/api/posts/${postId}/comments/${_key}`, {
    method: 'DELETE',
  }).then((res) => res.json());
}
