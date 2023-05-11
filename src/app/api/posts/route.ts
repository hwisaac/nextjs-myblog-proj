import { getAllPostsOf } from '@/service/post';
// import { createPost } from '@/service/posts';
import { withSessionUser } from '@/utils/session';

import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return getAllPostsOf('hwisaac0@gmail.com').then((data) =>
    NextResponse.json(data)
  );
  // return withSessionUser(async (user) =>
  //   getAllPostsOf(user.email) //
  //     .then((data) => NextResponse.json(data))
  // );
}

// export async function POST(req: NextRequest) {
//   return withSessionUser(async (user) => {
//     const form = await req.formData();
//     const text = form.get('text')?.toString();
//     const file = form.get('file') as Blob;

//     if (!text || !file) {
//       return new Response('Bad request', { status: 400 });
//     }

//     return createPost(user.id, text, file) //
//       .then((data) => NextResponse.json(data));
//   });
// }
