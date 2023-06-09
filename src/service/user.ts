import { idText } from 'typescript';
import { IPost } from './post';
import { client } from './sanity';

export interface IUser {
  name: string;
  email: string;
  image?: string | null;
  posts: IPost[];
  userId: string;
}
type OAuthUser = {
  id: string;
  email: string;
  name: string;
  image?: string | null;
};

export async function addUser({ email, name, image }: any) {
  return client.createIfNotExists({
    _id: name,
    _type: 'user',
    email,
    name,
    image,
    posts: [],
  });
}
