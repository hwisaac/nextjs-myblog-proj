import { assetsURL, client, urlFor } from './sanity';
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
  password: '123123',
  createdAt: '123123',
  content: 'content ttttasdfasdf',
  _key: 'abcadsfef',
};


export async function getPostDetail(
  userId: string,
  postId: string
): Promise<IPostDetail> {
  if (!userId) throw new Error('userId 에러');

  const GROQ = `
  *[_type == "post" && _id == "${postId}" && author->_id == "${userId}"]{
    "author": {
      "name": author->name,
      "email": author->email,
      "image" : author->image,
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

  return client
    .fetch(GROQ)
    .then((post) => ({
      ...post,
      comments: post?.comments ?? [],
      tags: post?.tags ?? [],
      postImage: post?.postImage ? urlFor(post.postImage) : null,
    }))
    .catch((err) => console.error(err));
}

export async function getAllPostsOf(userId?: string | null): Promise<IPost[]> {
  if (!userId) return [];
  const GROQ = `
  *[_type == "post"&& author->_id=="${userId}"]
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

interface ICreatePostPayload {
  title: string;
  tags: string[];
  content: string;
  file: Blob;
}

export async function createPost(userId: string, payload: ICreatePostPayload) {
  const { title, tags, content, file } = payload;

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
          author: { _ref: userId },
          title,
          slug: createSlug(title),
          content,
          description: extractDescription(content, 150),
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

export async function deletePost(postId: string) {
  const targetPost = {
    query: `
      *[_type == "post" && _id == "${postId}"][0]
      `,
  };
  return client
    .delete(targetPost)
    .then(() => console.log('포스트 삭제 성공:', postId))
    .catch((error) => console.error(error));
}

export async function deleteComment(postId: string, _key: string) {
  return client
    .patch(postId)
    .unset([`comments[_key == "${_key}"]`])
    .commit();
}
let dummyPostId = 'nTFm2VscxOrnKR8ozYiMZ4';

export async function getComments(postId: string): Promise<IComment[]> {
  const GROQ = `
    *[_type == "post"&& _id=="${postId}"]
        | order(_createdAt desc){
        "comments":comments,
    }.comments
  `;
  const comments = await client.fetch(GROQ);
  return comments;
}

export async function postComment(
  postId: string,
  commentData: { content: string; name: string; password: string }
) {
  const { content, name, password } = commentData;
  return client
    .patch(postId)
    .setIfMissing({ comments: [] })
    .append('comments', [
      {
        content,
        name,
        password,
        createdAt: new Date().toISOString(),
      },
    ])
    .commit({ autoGenerateArrayKeys: true });
}
