import React from 'react';
import GridSectionBlock from './footer/GridSectionBlock';
import ArticleCard from './ArticleCard';
import { IPost } from '@/service/post';

type Props = {};

const posts: IPost[] = [
  {
    title: 'The spectacle before us was indeed sublime',
    date: 'July 26, 2019',
    comments: 2,
    likes: 1082,
    description:
      'Welcome, it’s great to have you here. We know that first impressions are important, so we’ve populated your new site with some initial getting started posts that will help you get familiar with everything in no time. This is the first one!…',
    categories: ['lifestyle', 'music'],
    image: '',
    postId: 'post01',
  },
  {
    title: 'The meaning of health has evolved over time',
    date: 'July 26, 2019',
    comments: 1,
    likes: 946,
    description:
      'In keeping with the biomedical perspective, early definitions of health focused on the theme of the body’s ability to function; health was seen as a state of normal function that could be disrupted from time to time by disease. An…',
    categories: ['health', 'travel'],
    image: '',
    postId: 'post02',
  },
  {
    title: 'A small dog named Duden flows by their place',
    date: 'July 25, 2019',
    comments: 0,
    likes: 831,
    description:
      'The Ghost editor has everything you need to fully optimise your content. This is where you can add tags and authors, feature a post, or turn a post into a page. Access the post settings menu in the top right…',
    categories: ['travel'],
    image: '',
    postId: 'post03',
  },
];

export default function LatestArticlesBlock({}: Props) {
  return (
    <GridSectionBlock title='Latest Articles'>
      <div className='w-full flex flex-col justify-between gap-4'>
        {posts.map((post: IPost) => (
          <ArticleCard key={post.title} post={post} />
        ))}
      </div>
    </GridSectionBlock>
  );
}
