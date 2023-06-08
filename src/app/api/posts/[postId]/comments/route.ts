import { postComment } from '@/service/post';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { postId, postData } = await req.json();
  await postComment(postId, postData);
  console.log(postId, postData);
  return NextResponse.json(req);
}
