import { deleteComment } from '@/service/post';
import { NextRequest } from 'next/server';
type Context = {
  params: { slug: string; key: string };
};

export async function DELETE(_: NextRequest, context: Context) {
  const { slug: postId, key } = context.params;
  console.log(`postId=${postId} / key=${key}`);
  await deleteComment(postId, key); //
  return;
}
