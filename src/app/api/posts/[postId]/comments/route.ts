import { postComment } from '@/service/post';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { postId, commentData } = await req.json();
  await postComment(postId, commentData);
  console.log(postId, commentData);
  return NextResponse.json({ ok: true });
}
