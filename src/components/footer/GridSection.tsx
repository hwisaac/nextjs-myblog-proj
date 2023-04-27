import React from 'react';
import GridSectionBlock from './GridSectionBlock';
import ArticleCard from '../ArticleCard';
import TagCard from '../TagCard';
import IconTwitter from '../icons/IconTwitter';
import IconFacebook from '../icons/IconFacebook';
import IconInstagram from '../icons/IconInstagram';
import IconFeed from '../icons/IconFeed';
import SNSCard from '../SNSCard';
import Avatar from '../Avatar';

type Props = {};
export interface IPost {
  title: string;
  date: string;
  comments: number;
  likes: number;
  description: string;
  categories: string[];
  image: string;
}

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
  },
];

const TAGS = ['health', 'lifestyle', 'music', 'technology', 'travel', 'video'];

export interface ISNS {
  color: string;
  icon: React.ReactNode;
}
const SNSs: ISNS[] = [
  {
    color: 'uTwitter',
    icon: <IconTwitter />,
  },
  {
    color: 'uFacebook',
    icon: <IconFacebook />,
  },
  {
    color: 'uInstagram',
    icon: <IconInstagram />,
  },
  {
    color: 'uFeed',
    icon: <IconFeed />,
  },
];
export default function GridSection({}: Props) {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
      <GridSectionBlock title='Latest Articles'>
        <div className='flex flex-col justify-between'>
          {posts.map((post: IPost) => (
            <ArticleCard key={post.title} post={post} />
          ))}
        </div>
      </GridSectionBlock>
      <GridSectionBlock title='Tag Cloud'>
        <div className='w-full space-x-2 space-y-2'>
          {TAGS.map((tag: string) => (
            <TagCard key={tag} tag={tag} />
          ))}
        </div>
      </GridSectionBlock>

      <GridSectionBlock title='Follow Me!'>
        <div className='w-full space-x-2 space-y-2'>
          {SNSs.map((sns) => (
            <SNSCard key={sns.color} sns={sns} />
          ))}
        </div>
      </GridSectionBlock>

      <GridSectionBlock title='About me'>
        <div className='w-full'>
          <Avatar />
        </div>
      </GridSectionBlock>
    </section>
  );
}
