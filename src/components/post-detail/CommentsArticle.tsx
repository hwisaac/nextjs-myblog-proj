import { IComment } from '@/service/post';
import React from 'react';
import CommentsSection from './CommentsSection';
import LeaveReplySection from './LeaveReplySection';

type Props = { comments: IComment[] };

export default function CommentsArticle({ comments }: Props) {
  return (
    <article className='overflow-hidden bg-white shadow-lg m-4 py-14'>
      <CommentsSection comments={comments} />
      <LeaveReplySection />
    </article>
  );
}
