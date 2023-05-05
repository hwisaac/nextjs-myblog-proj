import { IPost } from './post';

export interface IUser {
  username: string;
  name: string;
  title: string;
  image: string;
  posts: IPost[];
}
