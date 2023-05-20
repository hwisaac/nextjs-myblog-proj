import { IPost } from '@/service/post';

export default function getAllTags(posts: IPost[]): string[] {
  if (!posts || posts.length === 0) return [];
  const allTags: string[] = [];

  posts?.forEach((post) => {
    post.tags.forEach((tag) => {
      if (!allTags.includes(tag)) {
        allTags.push(tag);
      }
    });
  });

  return allTags;
}
