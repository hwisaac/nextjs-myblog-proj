// import { readFile } from 'fs/promises';
// import path from 'path';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import { IUser } from './user';
import { client, urlFor } from './sanity';
import decodeSlug from '@/utils/decodeSlug';

export interface IPost {
  title: string;
  slug: string;
  thumbnail: string | null;
  description: string;
  tags: string[];
  postId: string;
  createdAt: string;
  updatedAt: string;
  commentsLength: number;
}

export interface IComment {
  name: string;
  email: string;
  password: string;
  content: string;
  _key: string;
  createdAt: string;
}
export interface IPostDetail {
  author: {
    name: string;
    email: string;
    image: string;
  };
  title: string;
  slug: string;
  thumbnail: string;
  tags: string[];
  postId: string;
  createdAt: string;
  updatedAt: string;
  comments: IComment[];
  content: string;
}
export const dummyComment: IComment = {
  name: '유저네임',
  email: 'abcd@naver.com',
  password: '123123',
  createdAt: '123123',
  content: 'content ttttasdfasdf',
  _key: 'abcadsfef',
};
export const dummyPost: IPost = {
  title: 'Top 10 old rock songs from the 80’s',
  slug: 'slug-test',
  thumbnail: '',
  description:
    'Music is an art form and cultural activity whose medium is sound organized in time. General definitions of music include common elements such as pitch (which governs melody and harmony), rhythm (and its associated concepts tempo, meter, and articulation), dynamics…',
  tags: ['lifestyle', 'music'],
  postId: 'post07',
  createdAt: 'June 25, 2019',
  updatedAt: 'July 26, 2019',
  commentsLength: 3,
};

const posts: IPost[] = [
  dummyPost,
  dummyPost,
  dummyPost,
  dummyPost,
  dummyPost,
  dummyPost,
  dummyPost,
];

export async function getPostDetail(
  email: string,
  slug: string
): Promise<IPostDetail> {
  if (!email) throw new Error('email 에러');

  const GROQ = `
  *[_type == "post" && slug == "${decodeSlug(
    slug
  )}" && author->email == "${email}"]{
    ...,
    "author": {
      "name": author->name,
      "email": author->email,
      "iamge" : author->image,
    },
    "createdAt":_createdAt,
    "updatedAt":_updatedAt,
  }[0]
  `;

  return client.fetch(GROQ).then((post) => ({
    ...post,
    comments: post?.comments ?? [],
    tags: post?.tags ?? [],
  }));
}

export async function getAllPostsOf(email?: string | null): Promise<IPost[]> {
  if (!email) return [];
  const GROQ = `
  *[_type == "post"&& author->email=="${email}"]
      | order(_createdAt desc){
      "title":title,
      "slug":slug,
      "thumbnail":thumbnail,
      "description":description,
      "tags":tags,
      "postId": _id,
      "createdAt": _createdAt,
      "updatedAt":_updatedAt,
      "commentsLength": count(comments)
    }
  `;

  return client.fetch(GROQ).then((posts) =>
    posts.map((post: IPost) => ({
      ...post,
      tags: post.tags ?? [],
      thumbnail: post.thumbnail ? urlFor(post.thumbnail) : null,
      commentsLength: post.commentsLength ?? 0,
    }))
  );
}

export async function getTags(email: string) : Promise<string[]>{
  const GROQ = `
    *[_type == "post"&& author->email=="${email}"]
        | order(_createdAt desc){
        "tags":tags,
    }
  `
  const totalTags = await client.fetch(GROQ);
  const myArr = []
  for (let el of totalTags){
    myArr.push( ...el.tags)
  }
 //@ts-ignore
  return [...new Set(myArr) ] as string[];
  
} 