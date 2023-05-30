'use client';
import PortalKV from '@/components/PortalKV';
import PostCard from '@/components/PostCard';
import TagHeading from '@/components/tag-page/TagHeading';
import { IPost } from '@/service/post';
import getAllTags from '@/utils/getAllTags';
import React, { useState } from 'react';
import useSWR from 'swr';

type Props = {
  tagProp: string;
};
const posts: IPost[] = [
  {
    title: 'The spectacle before us was indeed sublime',
    slug: 'the-spectacle-before-us-was-indeed-sublime',
    updatedAt: '2019-01-01',
    createdAt: '2019-01-01',
    commentsLength: 2,
    description:
      'Welcome, it’s great to have you here. We know that first impressions are important, so we’ve populated your new site with some initial getting started posts that will help you get familiar with everything in no time. This is the first one!…',
    tags: ['lifestyle', 'music'],
    postImage: '',
    postId: 'post01',
  },
  {
    title: 'The meaning of health has evolved over time',
    slug: 'the-spectacle-before-us-was-indeed-sublime',
    updatedAt: '2019-01-01',
    createdAt: '2019-01-01',
    commentsLength: 2,
    description:
      'In keeping with the biomedical perspective, early definitions of health focused on the theme of the body’s ability to function; health was seen as a state of normal function that could be disrupted from time to time by disease. An…',
    tags: ['health', 'travel'],
    postImage: '',
    postId: 'post02',
  },
  {
    title: 'A small dog named Duden flows by their place',
    slug: 'the-spectacle-before-us-was-indeed-sublime',
    updatedAt: '2019-01-01',
    createdAt: '2019-01-01',
    commentsLength: 2,
    description:
      'The Ghost editor has everything you need to fully optimise your content. This is where you can add tags and authors, feature a post, or turn a post into a page. Access the post settings menu in the top right…',
    tags: ['travel'],
    postImage: '',
    postId: 'post03',
  },
  {
    title: '5 Spanish Cities that will make you fall in Love',
    slug: 'the-spectacle-before-us-was-indeed-sublime',
    updatedAt: '2019-01-01',
    createdAt: '2019-01-01',
    commentsLength: 2,
    description:
      'Spain is home to some of the most stunning architecture in Europe, known throughout the world for its distinguishable form and famous historical monuments. With influences from the Romans to the Moors, you’ll find each city has a unique architectural…',
    tags: ['travel'],
    postImage: '',
    postId: 'post04',
  },
  {
    title: '3 ideas to keep you healthy and strong',
    slug: 'the-spectacle-before-us-was-indeed-sublime',
    updatedAt: '2019-01-01',
    createdAt: '2019-01-01',
    commentsLength: 2,
    description:
      'Achieving and maintaining health is an ongoing process, shaped by both the evolution of health care knowledge and practices as well as personal strategies and organized interventions for staying healthy. Diet An important way to maintain your personal health is to have…',
    tags: ['travel'],
    postImage: '',
    postId: 'post05',
  },
  {
    title: 'These Are The 10 Best Restaurants in The World',
    slug: 'the-spectacle-before-us-was-indeed-sublime',
    updatedAt: '2019-01-01',
    createdAt: '2019-01-01',
    commentsLength: 2,
    description:
      'Each year, fine diners, restaurateurs and food writers—I’m in the last group—try to read the annual World’s 50 Best Restaurant list like tea leaves, searching for trends, or at the very least, a coherent theme. But as in previous years,…',
    tags: ['lifestyle'],
    postImage: '',
    postId: 'post06',
  },
  {
    title: 'Top 10 old rock songs from the 80’s',
    slug: 'the-spectacle-before-us-was-indeed-sublime',
    updatedAt: '2019-01-01',
    createdAt: '2019-01-01',
    commentsLength: 2,
    description:
      'Music is an art form and cultural activity whose medium is sound organized in time. General definitions of music include common elements such as pitch (which governs melody and harmony), rhythm (and its associated concepts tempo, meter, and articulation), dynamics…',
    tags: ['lifestyle', 'music'],
    postImage: '',
    postId: 'post07',
  },
];
export default function TagsPage() {
  // const { data: posts } = useSWR<IPost[]>('/api/posts');
  const [selectedPosts, setSelectedPosts] = useState<IPost[]>([]);

  const allTags = getAllTags(posts);
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
