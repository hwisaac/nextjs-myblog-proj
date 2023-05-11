import { IComment } from '@/service/post';
import React from 'react';
import RedLineTitle from '../ui/RedLineTitle';
import Comment from './Comment';

type Props = { comments: IComment[] };

export default function CommentsSection({ comments }: Props) {
  const dummyComments = [
    {
      username: 'Username1',
      email: 'abc@abc.com',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem itaque quis culpa veritatis, dolores nisi, adipisci omnis eos aliquid ea architecto, temporibus repellendus magni dolori',
      createdAt: 'May 16, 2022',
      password: '1',
    },
    {
      username: 'Username1',
      email: 'abc@abc.com',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem itaque quis culpa veritatis, dolores nisi, adipisci omnis eos aliquid ea architecto, temporibus repellendus magni dolori',
      createdAt: 'May 16, 2022',
      password: '1',
    },
    {
      username: 'Username1',
      email: 'abc@abc.com',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem itaque quis culpa veritatis, dolores nisi, adipisci omnis eos aliquid ea architecto, temporibus repellendus magni dolori',
      createdAt: 'May 16, 2022',
      password: '1',
    },
  ];
  return (
    <section className='pb-16 px-10 '>
      <RedLineTitle title={'Comments'} />
      <div className='divide-y divide-dashed'>
        {comments.map((comment, index) => (
          <Comment key={`comment-${index}`} comment={comment} />
        ))}
      </div>
    </section>
  );
}
