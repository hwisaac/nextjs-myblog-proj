import React from 'react';
import { colors } from '@/utils/color';
import { ISNS } from './FollowMeBlock';

type Props = { sns: ISNS };

export default function SNSCard({ sns }: Props) {
  const color = colors(sns.color);
  const { instance } = sns;
  return (
    <div
      className={`border-2 ${instance.border} w-12 h-12 inline-flex justify-center items-center`}>
      <div
        className={`w-[98%] h-[98%] ${instance.bg} border border-white text-white flex justify-center items-center m-auto text-2xl`}>
        {sns.icon}
      </div>
    </div>
  );
}
