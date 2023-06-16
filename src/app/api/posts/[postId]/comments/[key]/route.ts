import { deleteComment } from '@/service/post';
import { NextRequest, NextResponse } from 'next/server';
type Context = {
  params: { postId: string; key: string };
};

export async function DELETE(_: NextRequest, context: Context) {
  const { postId, key } = context.params;

  await deleteComment(postId, key);
  return NextResponse.json({ ok: true });
}
