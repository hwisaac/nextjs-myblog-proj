'use client';
import PortalKV from '@/components/PortalKV';
import PostCard from '@/components/PostCard';
import TagHeading from '@/components/tag-page/TagHeading';
import { IPost } from '@/service/post';
import React, { useState } from 'react';

type Props = {
  params: any;
};

export default function TagsPage() {
  const [selectedPosts, setSelectedPosts] = useState<IPost[]>([]);

  return (
    <section>
      <PortalKV>
        <TagHeading setSelectedPosts={setSelectedPosts} />
      </PortalKV>
      <div className='grid grid-cols-3 gap-10 my-20'>
        {selectedPosts?.map((post) => (
          <PostCard key={post.title} post={post} size='small' />
        ))}
      </div>
    </section>
  );
}
