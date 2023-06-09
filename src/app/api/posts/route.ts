import { createPost, getAllPostsOf } from '@/service/post';
import { NextRequest, NextResponse } from 'next/server';

const userId = 'Darchive';
export async function GET() {
  return getAllPostsOf(userId).then((data) => NextResponse.json(data));
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
