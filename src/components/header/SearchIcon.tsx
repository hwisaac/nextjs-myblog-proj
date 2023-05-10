import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { BiSearch } from 'react-icons/bi';

type Props = {};

export default function SearchIcon({}: Props) {
  const { data: session } = useSession();
  const image = session?.user?.image;
  return (
    <div className='absolute right-0'>
      {session?.user ? (
        <>
          <span className='cursor-pointer' onClick={() => signOut()}>
            Log out
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className='w-16 h-16 rounded-full border'
            alt='user profile'
            src={image || ''}
          />
        </>
      ) : (
        <Link href='/auth/signin'>Log in</Link>
      )}
      <BiSearch className='border text-md text-white bg-uRed rounded-full p-3 box-content shadow-sm cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-out' />
    </div>
  );
}
