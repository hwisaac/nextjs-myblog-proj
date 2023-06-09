import React from 'react';

type Props = { children: React.ReactNode; title: string };

export default function ContainerWithTitle({ title, children }: Props) {
  return (
    <div className='space-y-2 mt-6'>
      <h6 className='text-uPrimary font-semibold text-md'>{title}</h6>
      {children}
    </div>
  );
}
