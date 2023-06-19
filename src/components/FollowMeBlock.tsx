import React from 'react';
import GridSectionBlock from './footer/GridSectionBlock';
import SNSCard from './SNSCard';
import IconFeed from './icons/IconFeed';
import IconInstagram from './icons/IconInstagram';
import { MyColors } from '@/utils/MyColor';
import IconFacebook from './icons/IconFacebook';
import IconTwitter from './icons/IconTwitter';

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

export default function FollowMeBlock({}: Props) {
  return (
    <GridSectionBlock title='Follow Me!'>
      <div className='w-full space-x-2 space-y-2'>
        {SNSs.map((sns, index) => (
          <SNSCard key={`${sns.color}-${index}`} sns={sns} />
        ))}
      </div>
    </GridSectionBlock>
  );
}
