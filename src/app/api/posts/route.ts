import { createPost, getAllPostsOf } from '@/service/post';
import { withSessionUser } from '@/utils/session';

import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return getAllPostsOf('hwisaac0@gmail.com').then((data) =>
    NextResponse.json(data)
  );
  // return withSessionUser(async (user) =>
  //   getAllPostsOf(user.email) //
  //     .then((data) => NextResponse.json(data))
  // );
}
type PostData = {
  title: string;
  tags: string[];
  content: string;
};
export async function POST(req: NextRequest) {
  const form = await req.formData();
  const postData = form.get('postData');

  const file = form.get('file') as Blob;
  console.log('/api/posts/route.ts');
  console.log('postData>>', postData);
  console.log('file', file);
  console.log('req.body.postData', req.body);

  if (!postData || !file) {
    return new Response('Bad request', { status: 400 });
  }
  // @ts-ignore
  return createPost('Darchive', { ...JSON.parse(postData), file }) //
    .then((data) => NextResponse.json(data));

  // return withSessionUser(async (user) => {
  //   const form = await req.formData();
  //   const text = form.get('text')?.toString();
  //   const file = form.get('file') as Blob;

  //   if (!text || !file) {
  //     return new Response('Bad request', { status: 400 });
  //   }

  //   return createPost(user.id, text, file) //
  //     .then((data) => NextResponse.json(data));
  // });
}
