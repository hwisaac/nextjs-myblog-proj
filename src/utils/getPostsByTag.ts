import { IPost } from '@/service/post';

export default function getPostsByTag(tag: string, posts?: IPost[]): IPost[] {
  if (!posts) return [];
  if (tag === '') return posts;

  let result: IPost[] = [];
  result = [...posts.filter((post) => post.tags.includes(tag))];
  
  return result;
}
