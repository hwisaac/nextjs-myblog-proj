import Link from 'next/link';
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
        <li
          key={index + item.color}
          className={`${item.color} cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-out`}>
          {item.icon}
        </li>
      ))}
      <li>
        <Link
          href='/posts/create'
          className='border rounded bg-yellow-500/60 active:text-red-500'>
          Create
        </Link>
      </li>
    </ul>
  );
}
