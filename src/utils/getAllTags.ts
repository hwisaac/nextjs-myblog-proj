import { IPost } from '@/service/post';

export default function getAllTags(posts: IPost[]): string[] {
  const allTags: string[] = [];

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (!allTags.includes(tag)) {
        allTags.push(tag);
      }
    });
  });

  return allTags;
}
