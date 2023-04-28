import React from 'react';
import { colors } from '@/utils/color';
import { ISNS } from './FollowMeBlock';

type Props = { sns: ISNS };

export default function SNSCard({ sns }: Props) {
  const color = colors(sns.color);
  const { instance } = sns;
  return (
    <div
      className={`group border-2 ${instance.border} w-12 h-12 inline-flex justify-center items-center`}>
      <div
        className={`w-[99%] h-[99%] ${instance.bg} border border-white text-white flex justify-center cursor-pointer items-center m-auto text-2xl group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform`}>
        {sns.icon}
      </div>
    </div>
  );
}
