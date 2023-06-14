import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Signin from '@/components/auth/Signin';
import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react';

type Props = {};

export default async function LoginPage({}: Props) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/');
  }
  const providers = (await getProviders()) ?? {};
  return (
    <section className='flex flex-col bg-white shadow-lg space-y-4 px-10 py-14'>
      <h1 className='text-uPrimary font-bold text-4xl mb-10'>Login</h1>
      <Signin providers={providers} />
    </section>
  );
}
