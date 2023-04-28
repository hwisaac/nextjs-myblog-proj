import React from 'react';
import GridSectionBlock from '../footer/GridSectionBlock';
import ArticleCard from '../ArticleCard';
import { IPost } from '../footer/GridSection';
import TagCard from '../TagCard';
import IconTwitter from '../icons/IconTwitter';
import IconFacebook from '../icons/IconFacebook';
import IconInstagram from '../icons/IconInstagram';
import IconFeed from '../icons/IconFeed';
import { MyColors } from '@/utils/color';
import SNSCard from '../SNSCard';
import Avatar from '../Avatar';
import LatestArticlesBlock from '../LatestArticlesBlock';
import TagCloudBlock from '../TagCloudBlock';
import FollowMeBlock from '../FollowMeBlock';

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
  border: string;
  bg: string;
  instance: { bg: string; text: string; border: string };
}
const SNSs: ISNS[] = [
  {
    color: 'uTwitter',
    icon: <IconTwitter />,
    instance: new MyColors('uTwitter').getClassName(),
    border: 'border-uTwitter',
    bg: 'bg-uTwitter',
  },
  {
    color: 'uFacebook',
    icon: <IconFacebook />,
    border: 'border-uFacebook',
    bg: 'bg-uFacebook',
    instance: new MyColors('uFacebook').getClassName(),
  },
  {
    color: 'uInstagram',
    icon: <IconInstagram />,
    border: 'border-uInstagram',
    bg: 'bg-uInstagram',
    instance: new MyColors('uInstagram').getClassName(),
  },
  {
    color: 'uFeed',
    icon: <IconFeed />,
    border: 'border-uFeed',
    bg: 'bg-uFeed',
    instance: new MyColors('uFeed').getClassName(),
  },
];

export default function SideBar({}: Props) {
  return (
    <section className='grid grid-cols-1 border border-uRed w-[600px]'>
      <LatestArticlesBlock />
      <TagCloudBlock />
      <FollowMeBlock />
    </section>
  );
}
