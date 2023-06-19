import React from 'react';
import { ISNS } from './FollowMeBlock';

type Props = { sns: ISNS };

export default function SNSCard({ sns }: Props) {
  const { instance } = sns;
  return (
    <div
      className={`relative group border-2 ${instance.border} w-12 h-12 inline-flex justify-center items-center`}>
      <div
        className={`absolute w-[99%] h-[99%] ${instance.bg} border border-white text-white flex justify-center cursor-pointer items-center m-auto text-2xl group-hover:w-[110%] group-hover:h-[110%] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ease-out`}>
        {sns.icon}
      </div>
    </div>
  );
}
