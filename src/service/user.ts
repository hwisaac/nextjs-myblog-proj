import { IPost } from './post';

export interface IUser {
  username: string;
  name: string;
  email: string;
  image: string;
  posts: IPost[];
}
