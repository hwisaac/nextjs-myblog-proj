import { deletePost, getPostDetail } from '@/service/post';
import { NextRequest, NextResponse } from 'next/server';

type Context = {
  params: { slug: string; postId: string };
};
const email = process.env.MY_EMAIL || '';
export async function GET(_: NextRequest, context: Context) {
  const { slug } = context.params;
  const postDetail = await getPostDetail(email, slug) //
    .then((data) => NextResponse.json(data));
  return postDetail;
}

export async function DELETE(_: NextRequest, context: Context) {
  const { slug } = context.params;
  console.log('api 라우트에서 postId 잘 들어왔나? ', slug);
  await deletePost('', slug); //
  return;
}
