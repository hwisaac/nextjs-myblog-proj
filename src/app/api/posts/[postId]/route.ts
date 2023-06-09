import { deletePost, getPostDetail } from '@/service/post';
import { NextRequest, NextResponse } from 'next/server';

type Context = {
  params: { postId: string };
};
const userId = 'Darchive';

export async function GET(_: NextRequest, context: Context) {
  const { postId } = context.params;

  const postDetail = await getPostDetail(userId, postId) //
    .then((data) => NextResponse.json(data));

  return postDetail;
}

export async function DELETE(_: NextRequest, context: Context) {
  const { postId } = context.params;
  await deletePost(postId); //
  return NextResponse.json({ ok: true });
}
