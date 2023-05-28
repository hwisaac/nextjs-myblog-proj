import Image from 'next/image';
import React from 'react';

type Props = { image?: string | null };

export default function CoverImage({ image }: Props) {
  return (
    <section className='relative w-full h-96 border bg-gray-200'>
      {image && (
        <Image className='object-cover' fill src={image} alt='Cover Image' />
      )}
    </section>
  );
}
