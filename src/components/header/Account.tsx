import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {};

const LOGIN_CLASSNAME = 'cursor-pointer group-hover:underline text-uPrimary';

export default function Account({}: Props) {
  const { data: session } = useSession();
  const image = session?.user?.image;
  const router = useRouter();
  return (
    <div className='absolute right-0 flex items-center group'>
      {session?.user ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className='w-8 h-8 rounded-full border'
            alt='user profile'
            src={image || ''}
          />
          <span className={LOGIN_CLASSNAME} onClick={() => signOut()}>
            Log out
          </span>
        </>
      ) : (
        <span
          className={LOGIN_CLASSNAME}
          onClick={() => router.push('/auth/signin')}>
          Log in
        </span>
      )}
    </div>
  );
}
