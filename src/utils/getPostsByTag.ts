import { IPost } from '@/service/post';

export default function getPostsByTag(tag: string, posts?: IPost[]): IPost[] {
  let result: IPost[] = [];
  if (posts) {
    result = [...posts.filter((post) => post.tags.includes(tag))];
  }
  return result;
}
