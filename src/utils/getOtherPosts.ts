import { IPost } from '@/service/post';

type PrevPost = IPost;
type NextPost = IPost;

export default function getOtherPosts(
  postId: string,
  posts: IPost[]
): [PrevPost, NextPost] {
  const currentIndex = posts.findIndex((post) => post.postId === postId);
  if (currentIndex === -1) return [posts[0], posts[posts.length - 1]];

  const prevPost = posts[currentIndex === 0 ? 0 : currentIndex - 1];
  const nextPost =
    posts[
      currentIndex === posts.length - 1 ? posts.length - 1 : currentIndex + 1
    ];

  return [prevPost, nextPost];
}
