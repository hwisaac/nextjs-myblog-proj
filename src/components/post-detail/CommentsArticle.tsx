import { IComment } from '@/service/post';
import React from 'react';
import CommentsSection from './CommentsSection';
import LeaveReplySection from './LeaveReplySection';

type Props = { comments: IComment[]; postId: string };

export default function CommentsArticle({ comments, postId }: Props) {
  return (
    <article className='overflow-hidden bg-white shadow-lg m-4 py-14'>
      <CommentsSection comments={comments} postId={postId} />
      <LeaveReplySection postId={postId} />
    </article>
  );
}
