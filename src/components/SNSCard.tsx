import React from 'react';
import { ISNS } from './footer/GridSection';

type Props = { sns: ISNS };

export default function SNSCard({ sns }: Props) {
  return (
    <div
      className={`border-2 border-${sns.color} w-16 h-16 inline-flex justify-center items-center`}>
      <div
        className={`w-[98%] h-[98%] bg-${sns.color} border border-white text-white flex justify-center items-center m-auto text-2xl`}>
        {sns.icon}
      </div>
    </div>
  );
}
