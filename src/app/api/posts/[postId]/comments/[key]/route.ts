import { deleteComment } from '@/service/post';
import { NextRequest } from 'next/server';
type Context = {
  params: { postId: string; key: string };
};

export async function DELETE(_: NextRequest, context: Context) {
  const { postId, key } = context.params;
  console.log(`postId=${postId} / key=${key}`);
  await deleteComment(postId, key); //
  return;
}
