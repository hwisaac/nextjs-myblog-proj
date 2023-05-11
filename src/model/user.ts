import { IPost } from '@/service/post';

export type AuthUser = {
  name: string;
  email: string;
  image: string;
  posts: IPost[];
};
