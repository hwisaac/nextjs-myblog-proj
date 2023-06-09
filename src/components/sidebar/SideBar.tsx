'use client';
import React from 'react';
import IconTwitter from '../icons/IconTwitter';
import IconFacebook from '../icons/IconFacebook';
import IconInstagram from '../icons/IconInstagram';
import IconFeed from '../icons/IconFeed';
import { MyColors } from '@/utils/MyColor';
import LatestArticlesBlock from '../LatestArticlesBlock';
import TagCloudBlock from '../TagCloudBlock';
import FollowMeBlock from '../FollowMeBlock';
import { usePathname } from 'next/navigation';

type Props = {};

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
  const pathname = usePathname();
  if (pathname === '/tag') return null;

  return (
    <section className='hidden lg:flex flex-col w-1/3 h-full sticky top-16 shrink-0 px-10'>
      <LatestArticlesBlock />
      <TagCloudBlock />
      <FollowMeBlock />
    </section>
  );
}
