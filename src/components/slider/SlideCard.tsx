import Image from 'next/image';
import React from 'react';
import SlideContents from './SlideContents';
import { IPost } from '@/service/post';

type Props = { post: IPost };

export default function SlideCard({ post }: Props) {
  const { postImage, createdAt, title, tags, postId } = post;

  return (
    <div className='w-full h-full relative flex justify-center items-center'>
      <div className='w-full h-full absolute z-20'>
        <Image
          src={postImage ?? '/images/image03.jpg'}
          alt={title}
          className='object-cover w-full h-full z-20 saturate-50 brightness-75'
          sizes='400px'
          fill
          priority
          // placeholder='blur'
          quality={50}
        />
      </div>
      <SlideContents
        tags={tags}
        createdAt={createdAt}
        title={title}
        postId={postId}
      />
    </div>
  );
}
