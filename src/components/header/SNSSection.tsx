import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdRssFeed } from 'react-icons/md';
import IconCreate from '../icons/IconCreate';
import { useSession } from 'next-auth/react';
type Props = {};

const SNS_ICONS = [
  { icon: <FaFacebookF />, color: 'text-uFacebook' },
  { icon: <FaTwitter />, color: 'text-uTwitter' },
  { icon: <FaInstagram />, color: 'text-uInstagram' },
];
export default function SNSSection({}: Props) {
  const { data: session } = useSession();

  return (
    <ul className='flex text-2xl gap-4 absolute left-0'>
      {SNS_ICONS.map((item, index) => (
        <li
          key={index + item.color}
          className={`${item.color} cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-out`}>
          {item.icon}
        </li>
      ))}
      {session?.user && (
        <li>
          <Link
            href='/posts/create'
            className='rounded text-uPrimary text-md active:text-red-500'>
            <IconCreate className='text-uFeed' />
          </Link>
        </li>
      )}
    </ul>
  );
}
