'use client';
import { ClientSafeProvider, signIn } from 'next-auth/react';
import React from 'react';

type Props = { providers: Record<string, ClientSafeProvider> };

export default function Signin({ providers }: Props) {
  return (
    <div className='border'>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with{provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}
