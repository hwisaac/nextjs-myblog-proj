import React from 'react';
import LatestArticlesBlock from '../LatestArticlesBlock';
import TagCloudBlock from '../TagCloudBlock';
import FollowMeBlock from '../FollowMeBlock';
import AboutMeBlock from '../AboutMeBlock';

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



export default function GridSection({}: Props) {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      <LatestArticlesBlock />
      <TagCloudBlock />
      <FollowMeBlock />
      <AboutMeBlock />
    </section>
  );
}
