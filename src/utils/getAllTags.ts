import { IPost } from '@/service/post';

type TagName = string;
type NumOfArticle = number;

export default function getAllTags(
  posts?: IPost[]
): Record<TagName, NumOfArticle> {
  const tagCounts: Record<TagName, NumOfArticle> = {};

  posts?.forEach((post) => {
    post.tags.forEach((tag) => {
      if (tagCounts[tag]) {
        tagCounts[tag]++;
      } else {
        tagCounts[tag] = 1;
      }
    });
  });

  return tagCounts;
}