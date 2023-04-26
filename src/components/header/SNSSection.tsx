import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdRssFeed } from 'react-icons/md';
type Props = {};

const SNS_ICONS = [
  { icon: <FaFacebookF />, color: 'text-uFacebook' },
  { icon: <FaTwitter />, color: 'text-uTwitter' },
  { icon: <FaInstagram />, color: 'text-uInstagram' },
  { icon: <MdRssFeed />, color: 'text-uFeed' },
];
export default function SNSSection({}: Props) {
  return (
    <ul className='flex text-2xl gap-4 absolute left-0'>
      {SNS_ICONS.map((item, index) => (
        <li key={index + item.color} className={`${item.color}`}>
          {item.icon}
        </li>
      ))}
    </ul>
  );
}
