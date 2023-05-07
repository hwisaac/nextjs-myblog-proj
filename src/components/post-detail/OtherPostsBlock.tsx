import React from 'react';
import RedLineTitle from '../ui/RedLineTitle';
import OtherPostCard from './OtherPostCard';
import { IPost } from '@/service/post';

type Props = {
  prevPost: IPost;
  nextPost: IPost;
};

export default function OtherPostsBlock({ nextPost, prevPost }: Props) {
  return (
    <section className='flex flex-col w-full max-w-4xl mx-4 py-20'>
      <RedLineTitle title='Other Posts' size='large' />
      <div className='flex justify-between'>
        <OtherPostCard post={prevPost} type='prev' />
        <OtherPostCard post={nextPost} type='next' />
      </div>
    </section>
  );
}
