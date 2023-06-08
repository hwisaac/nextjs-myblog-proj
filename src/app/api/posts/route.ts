import { createPost, getAllPostsOf } from '@/service/post';
import { withSessionUser } from '@/utils/session';

import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return getAllPostsOf('hwisaac0@gmail.com').then((data) =>
    NextResponse.json(data)
  );
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

  if (!postData || !file) {
    return new Response('Bad request', { status: 400 });
  }
  // @ts-ignore
  return createPost('Darchive', { ...JSON.parse(postData), file }) //
    .then((data) => NextResponse.json(data));
}
