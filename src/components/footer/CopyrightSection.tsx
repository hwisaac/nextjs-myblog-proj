import React from 'react';
import BlogTitle from '../header/BlogTitle';

type Props = {};

export default function CopyrightSection({}: Props) {
  return (
    <div className='flex flex-col items-center py-12 gap-6'>
      <BlogTitle size='small' />
      <p className='font-serif text-gray-400 text-sm'>
        Generated by <strong className='text-gray-500'>NextJS</strong>
      </p>
    </div>
  );
}
