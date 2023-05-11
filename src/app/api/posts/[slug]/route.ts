import { getPostDetail } from '@/service/post';
import { NextRequest, NextResponse } from 'next/server';

type Context = {
  params: { slug: string };
};
const email = process.env.MY_EMAIL || '';
export async function GET(_: NextRequest, context: Context) {
  console.log(`hi! Here is api/posts/${context.params.slug}`);
  const { slug } = context.params;
  const postDetail = await getPostDetail(email, slug) //
    .then((data) => NextResponse.json(data));
  console.log('postDetail', postDetail);
  return postDetail;
}
