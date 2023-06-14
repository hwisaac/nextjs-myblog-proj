import React from 'react';
import CommentsSection from './CommentsSection';
import LeaveReplySection from './LeaveReplySection';

type Props = { postId: string };

export default function CommentsArticle({ postId }: Props) {
  return (
    <article className='overflow-hidden bg-white shadow-lg m-4 py-14'>
      <CommentsSection postId={postId} />
      <LeaveReplySection postId={postId} />
    </article>
  );
}
