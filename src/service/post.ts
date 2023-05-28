// import { readFile } from 'fs/promises';
// import path from 'path';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import { IUser } from './user';
import { assetsURL, client, urlFor } from './sanity';
import decodeSlug from '@/utils/decodeSlug';
import createSlug from '@/utils/createSlug';
import extractDescription from '@/utils/extractDescription';

export interface IPost {
  title: string;
  slug: string;
  postImage: string | null;
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
  postImage: string;
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
  postImage: '',
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
  console.log(`${slug} ->디코딩: ${decodeSlug(slug)}`);
  const GROQ = `
  *[_type == "post" && slug == "${decodeSlug(
    slug
  )}" && author->email == "${email}"]{
    "author": {
      "name": author->name,
      "email": author->email,
      "iamge" : author->image,
    },
    "title" : title,
    "slug" : slug,
    "postImage" : postImage,
    "tags": tags,
    "createdAt" : _createdAt,
    "updatedAt" : _updatedAt,
    "postId" : _id,
    "comments" : comments,
    "content" : content,
  }[0]
  `;

  return client.fetch(GROQ).then((post) => ({
    ...post,
    comments: post?.comments ?? [],
    tags: post?.tags ?? [],
    postImage: post?.postImage ? urlFor(post.postImage) : null,
  }));
}

export async function getAllPostsOf(email?: string | null): Promise<IPost[]> {
  if (!email) return [];
  const GROQ = `
  *[_type == "post"&& author->email=="${email}"]
      | order(_createdAt desc){
      "title":title,
      "slug":slug,
      "postImage":postImage,
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
      postImage: post.postImage ? urlFor(post.postImage) : null,
      commentsLength: post.commentsLength ?? 0,
    }))
  );
}

export async function getTags(email: string): Promise<string[]> {
  const GROQ = `
    *[_type == "post"&& author->email=="${email}"]
        | order(_createdAt desc){
        "tags":tags,
    }
  `;
  const totalTags = await client.fetch(GROQ);
  const myArr = [];
  for (let el of totalTags) {
    myArr.push(...el.tags);
  }
  //@ts-ignore
  return [...new Set(myArr)] as string[];
}

export async function createPost(
  userId: string,
  {
    title,
    tags,
    content,
    file,
  }: {
    title: string;
    tags: string[];
    content: string;
    file: Blob;
  }
) {
  console.log({
    userId,
    title,
    tags,
    content,
    file,
  });

  return fetch(assetsURL, {
    method: 'POST',
    headers: {
      'content-type': file.type,
      authorization: `Bearer ${process.env.SANITY_SECRET_TOKEN}`,
    },
    body: file,
  })
    .then((res) => res.json())
    .then((result) => {
      return client.create(
        {
          _type: 'post',
          author: { _ref: userId, _type: 'reference' },
          title,
          slug: createSlug(title),
          content,
          description: extractDescription(content, 100),
          tags,
          postImage: { asset: { _ref: result.document._id } },
          comments: [],
        },
        {
          autoGenerateArrayKeys: true,
        }
      );
    });
}